import glob from 'fast-glob';
import path from 'path';
import fs from 'fs';
import { Markdown } from './generateMarkdown';
import { docgenParser } from './docgenParser';
import yargs from 'yargs';

const rootPath = path.join(__dirname, '../../../packages/');
const docsPath = path.join(__dirname, `../../docs`);

const ignore = [
  // Ignore themed package
  rootPath + 'themed/**',
  '**/base/**/index.tsx',
  '**/src/*/components/**',
  '**/__tests__/**',
  '**/helpers/**',
  '**/config/**',
  '**/base/src/SearchBar/SearchBar-**',
];

function main(sourcePath: string) {
  const filePaths = glob.sync(
    path.join(rootPath, sourcePath || '*/src/**/*.tsx'),
    {
      absolute: true,
      ignore,
      onlyFiles: true,
    }
  );

  console.log('Found', filePaths.length, 'components');

  const componentDocs = docgenParser.parse(filePaths);

  componentDocs.forEach((componentDoc) => {
    const md = new Markdown(componentDoc);
    md.generateMarkdown();
  });
}

const argv = yargs(process.argv.slice(2)).options({
  include: { type: 'string', alias: 'i' },
}).argv;

main(argv.include);
