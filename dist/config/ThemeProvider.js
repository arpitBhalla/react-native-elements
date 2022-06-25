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
import React, { useCallback, useContext } from 'react';
import deepmerge from 'deepmerge';
import { lightColors, darkColors } from './colors';
export const themeSpacing = {
    xl: 16,
    lg: 12,
    md: 8,
    sm: 4,
    xs: 2,
};
export const ThemeContext = React.createContext({
    theme: { colors: lightColors, mode: 'light' },
});
export const createTheme = (theme = {}) => {
    return Object.assign(Object.assign({}, theme), deepmerge({ lightColors, darkColors, spacing: themeSpacing }, {
        lightColors: theme.lightColors || {},
        darkColors: theme.darkColors || {},
        mode: theme.mode || 'light',
        spacing: theme.spacing || {},
    }));
};
const separateColors = (theme, themeMode) => {
    const { darkColors: themeDarkColors = {}, lightColors: themeLightColors = {}, spacing = {}, mode = themeMode } = theme, restTheme = __rest(theme, ["darkColors", "lightColors", "spacing", "mode"]);
    const themeColors = mode === 'dark' ? themeDarkColors : themeLightColors;
    return Object.assign({ colors: themeColors, mode, spacing: spacing }, restTheme);
};
export const ThemeProvider = ({ theme = createTheme({}), children }) => {
    const [themeState, setThemeState] = React.useState(theme);
    const updateTheme = React.useCallback((updatedTheme) => {
        setThemeState((oldTheme) => {
            const newTheme = typeof updatedTheme === 'function'
                ? updatedTheme(oldTheme)
                : updatedTheme;
            return deepmerge(Object.assign({}, oldTheme), newTheme);
        });
    }, []);
    const replaceTheme = React.useCallback((replacedTheme) => {
        setThemeState((oldTheme) => {
            const newTheme = typeof replacedTheme === 'function'
                ? replacedTheme(oldTheme)
                : replacedTheme;
            return deepmerge(createTheme({}), newTheme);
        });
    }, []);
    const ThemeContextValue = React.useMemo(() => ({
        theme: separateColors(themeState, themeState.mode),
        updateTheme,
        replaceTheme,
    }), [themeState, updateTheme, replaceTheme]);
    return (React.createElement(ThemeContext.Provider, { value: ThemeContextValue }, children));
};
export const ThemeConsumer = ThemeContext.Consumer;
export const useTheme = () => {
    return useContext(ThemeContext);
};
export const useThemeMode = () => {
    const { updateTheme, theme: { mode }, } = useTheme();
    const setMode = useCallback((colorMode) => {
        updateTheme({ mode: colorMode });
    }, [updateTheme]);
    return { mode, setMode };
};
