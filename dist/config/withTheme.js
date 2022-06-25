var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer, themeSpacing, } from './ThemeProvider';
import { lightColors } from './colors';
const isClassComponent = (Component) => { var _a; return Boolean((_a = Component === null || Component === void 0 ? void 0 : Component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent); };
const combineByStyles = (propName = '') => {
    if (propName.endsWith('style') || propName.endsWith('Style')) {
        return (prop1, prop2) => {
            return [prop1, prop2].flat();
        };
    }
    return undefined;
};
const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
    return Object.assign((props, forwardedRef) => {
        const { children } = props, rest = __rest(props, ["children"]);
        return (React.createElement(ThemeConsumer, null, (context) => {
            var _a;
            if (!context) {
                const newProps = Object.assign(Object.assign({}, rest), { theme: { colors: lightColors, spacing: themeSpacing }, children });
                return isClassComponent(WrappedComponent) ? (React.createElement(WrappedComponent, Object.assign({ ref: forwardedRef }, newProps))) : (React.createElement(WrappedComponent, Object.assign({}, newProps)));
            }
            const { theme, updateTheme, replaceTheme } = context;
            const themedProps = typeof theme[themeKey] === 'function'
                ? (_a = theme[themeKey]) === null || _a === void 0 ? void 0 : _a.call(theme, rest)
                : theme[themeKey];
            const newProps = Object.assign(Object.assign({ theme: {
                    colors: theme.colors,
                    mode: theme.mode,
                    spacing: theme.spacing,
                }, updateTheme,
                replaceTheme }, deepmerge(themedProps || {}, rest, {
                customMerge: combineByStyles,
                clone: false,
            })), { children });
            if (isClassComponent(WrappedComponent)) {
                return React.createElement(WrappedComponent, Object.assign({ ref: forwardedRef }, newProps));
            }
            return React.createElement(WrappedComponent, Object.assign({}, newProps));
        }));
    }, { displayName: displayName });
};
function withTheme(WrappedComponent, themeKey) {
    const name = themeKey
        ? `Themed.${themeKey}`
        : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
    const Component = ThemedComponent(WrappedComponent, themeKey, name);
    if (isClassComponent(WrappedComponent)) {
        return hoistNonReactStatics(React.forwardRef(Component), WrappedComponent);
    }
    return Component;
}
export default withTheme;
