/// <reference types="react" />
import { DialogLoadingProps } from '@rneui/base/dist/Dialog/Dialog.Loading';
import { DialogTitleProps } from '@rneui/base/dist/Dialog/Dialog.Title';
import { DialogButtonProps } from '@rneui/base/dist/Dialog/Dialog.Button';
import { DialogActionsProps } from '@rneui/base/dist/Dialog/Dialog.Actions';
import { DialogProps } from '@rneui/base/dist/Dialog/Dialog';
export type { DialogProps, DialogLoadingProps, DialogTitleProps, DialogActionsProps, };
declare const _default: (import("react").FunctionComponent<DialogProps> | import("react").ForwardRefExoticComponent<DialogProps>) & {
    Loading: import("react").FunctionComponent<DialogLoadingProps> | import("react").ForwardRefExoticComponent<DialogLoadingProps>;
    Title: import("react").FunctionComponent<DialogTitleProps> | import("react").ForwardRefExoticComponent<DialogTitleProps>;
    Actions: import("react").FunctionComponent<DialogActionsProps> | import("react").ForwardRefExoticComponent<DialogActionsProps>;
    Button: import("react").FunctionComponent<DialogButtonProps> | import("react").ForwardRefExoticComponent<DialogButtonProps>;
};
export default _default;
