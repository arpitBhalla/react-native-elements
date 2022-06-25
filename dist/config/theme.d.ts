import { Colors } from './colors';
import { ComponentTheme } from './theme.component';
export declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export declare type ThemeMode = 'light' | 'dark';
export interface ThemeSpacing {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
export interface Theme {
    mode: ThemeMode;
    spacing: ThemeSpacing;
}
export interface FullTheme extends ComponentTheme, Theme {
    colors: Colors;
}
