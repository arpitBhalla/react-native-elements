/// <reference types="react" />
import { TabViewProps } from '@rneui/base/dist/TabView/TabView';
import { TabViewItemProps } from '@rneui/base/dist/TabView/TabView.Item';
export type { TabViewProps, TabViewItemProps };
declare const _default: (import("react").FunctionComponent<TabViewProps & {
    theme?: import("@rneui/base").Theme;
}> | import("react").ForwardRefExoticComponent<TabViewProps & {
    theme?: import("@rneui/base").Theme;
}>) & {
    Item: import("react").FunctionComponent<TabViewItemProps> | import("react").ForwardRefExoticComponent<TabViewItemProps>;
};
export default _default;
