#!/usr/bin/env node

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const out = (name, version) => `${name} : ${version}`;

const run = (cmd) => {
  try {
    const output = childProcess.execSync(cmd, {
      stdio: [0, 'pipe', 'ignore'],
    });
    return output.toString().trim();
  } catch (error) {}
};

const readManifest = (manifestPath) => {
  if (!fs.existsSync(manifestPath)) {
    throw new Error('No package.json found');
  }
  return JSON.parse(fs.readFileSync(manifestPath)) || {};
};

const getManifestDeps = (manifestPath) => {
  if (!fs.existsSync(manifestPath)) {
    throw new Error('No package.json found');
  }
  try {
    const { dependencies, devDependencies } = readManifest(manifestPath);
    return { ...dependencies, ...devDependencies };
  } catch (error) {
    console.error(error);
  }
};

const getManifestVersion = (src = '') => {
  const { version, name } = readManifest(src);
  return out(name, version);
};

const getGlobalDeps = (exp) => {
  const npmGlobalPath = run('npm get prefix --global');
  if (!npmGlobalPath) {
    return [];
  }
  const globalPkgs = glob.sync(
    path.join(
      npmGlobalPath,
      '*',
      'node_modules',
      `{${exp}}` || '{*,@*/*}',
      'package.json'
    )
  );
  return globalPkgs.map(getManifestVersion);
};

const getLocalDeps = (exp = /^/) => {
  const localDeps = getManifestDeps(path.join(process.cwd(), 'package.json'));
  return Object.entries(localDeps)
    .filter(([name]) => exp.test(name))
    .map(([name, version]) => out(name, version));
};

function main(pkgs) {
  const exp = new RegExp(`^${pkgs.join('$|^').replace('*', '.*')}$`);
  const npmGlobalDeps = getGlobalDeps(pkgs);
  const npmLocalDeps = getLocalDeps(exp);

  let log = '';
  if (npmGlobalDeps.length > 0) {
    log += '\n ## Global Dependencies:\n';
    npmGlobalDeps.forEach((dep) => {
      log += `\n - ${dep}`;
    });
  }
  if (npmLocalDeps.length > 0) {
    log += '\n\n ## Local Dependencies:\n';
    npmLocalDeps.forEach((dep) => {
      log += `\n - ${dep}`;
    });
  }
  log += '\n';
  // eslint-disable-next-line no-console
  console.log(log);
}

main(['@rneui/*', 'react-native-elements', 'expo', 'expo-cli', 'react-native']);
