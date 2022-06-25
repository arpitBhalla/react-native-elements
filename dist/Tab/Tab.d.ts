import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface TabProps extends ViewProps {
    value?: number;
    scrollable?: boolean;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    variant?: 'primary' | 'default';
}
export declare const TabBase: RneFunctionComponent<TabProps>;
