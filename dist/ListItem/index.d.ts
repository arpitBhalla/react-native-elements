/// <reference types="react" />
import { ListItemProps } from '@rneui/base/dist/ListItem/ListItem';
import { ListItemContentProps } from '@rneui/base/dist/ListItem/ListItem.Content';
import { ListItemChevronProps } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import { ListItemInputProps } from '@rneui/base/dist/ListItem/ListItem.Input';
import { ListItemCheckBoxProps } from '@rneui/base/dist/ListItem/ListItem.CheckBox';
import { ListItemButtonGroupProps } from '@rneui/base/dist/ListItem/ListItem.ButtonGroup';
import { ListItemTitleProps } from '@rneui/base/dist/ListItem/ListItem.Title';
import { ListItemSubtitleProps } from '@rneui/base/dist/ListItem/ListItem.Subtitle';
import { ListItemSwipeableProps } from '@rneui/base/dist/ListItem/ListItem.Swipeable';
import { ListItemAccordionProps } from '@rneui/base/dist/ListItem/ListItem.Accordion';
export type { ListItemAccordionProps, ListItemSwipeableProps, ListItemProps as ListItemProps, };
declare const _default: (import("react").FunctionComponent<ListItemProps> | import("react").ForwardRefExoticComponent<ListItemProps>) & {
    Accordion: import("react").FunctionComponent<ListItemAccordionProps> | import("react").ForwardRefExoticComponent<ListItemAccordionProps>;
    Chevron: import("react").FunctionComponent<ListItemChevronProps> | import("react").ForwardRefExoticComponent<ListItemChevronProps>;
    Content: import("react").FunctionComponent<ListItemContentProps> | import("react").ForwardRefExoticComponent<ListItemContentProps>;
    Input: import("react").FunctionComponent<ListItemInputProps> | import("react").ForwardRefExoticComponent<ListItemInputProps>;
    Title: import("react").FunctionComponent<ListItemTitleProps> | import("react").ForwardRefExoticComponent<ListItemTitleProps>;
    Subtitle: import("react").FunctionComponent<ListItemSubtitleProps> | import("react").ForwardRefExoticComponent<ListItemSubtitleProps>;
    Swipeable: import("react").FunctionComponent<ListItemSwipeableProps> | import("react").ForwardRefExoticComponent<ListItemSwipeableProps>;
    CheckBox: import("react").FunctionComponent<ListItemCheckBoxProps> | import("react").ForwardRefExoticComponent<ListItemCheckBoxProps>;
    ButtonGroup: import("react").FunctionComponent<ListItemButtonGroupProps> | import("react").ForwardRefExoticComponent<ListItemButtonGroupProps>;
};
export default _default;
