/// <reference types="react" />
import { TabProps } from '@rneui/base/dist/Tab/Tab';
import { TabItemProps } from '@rneui/base/dist/Tab/Tab.Item';
export type { TabProps, TabItemProps };
export declare const ThemedTab: (import("react").FunctionComponent<TabProps & {
    theme?: import("@rneui/base").Theme;
}> | import("react").ForwardRefExoticComponent<TabProps & {
    theme?: import("@rneui/base").Theme;
}>) & {
    Item: import("react").FunctionComponent<TabItemProps> | import("react").ForwardRefExoticComponent<TabItemProps>;
};
export default ThemedTab;
