import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';
declare type ActiveTabItemStyle<T = {}> = ((active: boolean) => StyleProp<T>) | StyleProp<T>;
export interface TabItemProps extends Omit<ButtonProps, 'buttonStyle' | 'titleStyle' | 'containerStyle' | 'iconContainerStyle'> {
    active?: boolean;
    variant?: 'primary' | 'default';
    buttonStyle?: ActiveTabItemStyle<ViewStyle>;
    titleStyle?: ActiveTabItemStyle<TextStyle>;
    containerStyle?: ActiveTabItemStyle<ViewStyle>;
    iconContainerStyle?: ActiveTabItemStyle<ViewStyle>;
}
export declare const TabItem: RneFunctionComponent<TabItemProps>;
export {};
