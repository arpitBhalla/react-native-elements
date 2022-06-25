import React from 'react';
import { StyleProp, TextProps, ViewProps, StatusBarProps, StatusBarStyle, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { HeaderIcon } from './components/HeaderIcon';
declare type HeaderSubComponent = React.ReactElement<{}> | TextProps | HeaderIcon;
export interface HeaderProps extends ViewProps {
    ViewComponent?: typeof React.Component;
    linearGradientProps?: Object;
    statusBarProps?: StatusBarProps;
    barStyle?: StatusBarStyle;
    leftComponent?: HeaderSubComponent;
    centerComponent?: HeaderSubComponent;
    rightComponent?: HeaderSubComponent;
    backgroundColor?: string;
    backgroundImage?: ImageSourcePropType;
    backgroundImageStyle?: ImageStyle;
    placement?: 'left' | 'center' | 'right';
    containerStyle?: StyleProp<ViewStyle>;
    centerContainerStyle?: StyleProp<ViewStyle>;
    leftContainerStyle?: StyleProp<ViewStyle>;
    rightContainerStyle?: StyleProp<ViewStyle>;
    children?: JSX.Element | JSX.Element[];
    elevated?: boolean;
}
export declare const Header: RneFunctionComponent<HeaderProps>;
export {};
