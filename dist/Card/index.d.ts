/// <reference types="react" />
import { CardProps } from '@rneui/base/dist/Card/Card';
import { CardDividerProps } from '@rneui/base/dist/Card/Card.Divider';
import { CardImageProps } from '@rneui/base/dist/Card/Card.Image';
import { CardTitleProps } from '@rneui/base/dist/Card/Card.Title';
import { CardFeaturedSubtitleProps } from '@rneui/base/dist/Card';
import { CardFeaturedTitleProps } from '@rneui/base/dist/Card';
declare const ThemedCard: (import("react").FunctionComponent<CardProps & {
    theme?: import("@rneui/base").Theme;
}> | import("react").ForwardRefExoticComponent<CardProps & {
    theme?: import("@rneui/base").Theme;
}>) & {
    Divider: import("react").FunctionComponent<CardDividerProps> | import("react").ForwardRefExoticComponent<CardDividerProps>;
    Image: import("react").FunctionComponent<CardImageProps> | import("react").ForwardRefExoticComponent<CardImageProps>;
    Title: import("react").FunctionComponent<CardTitleProps> | import("react").ForwardRefExoticComponent<CardTitleProps>;
    FeaturedTitle: import("react").FunctionComponent<CardFeaturedTitleProps & {
        theme?: import("@rneui/base").Theme;
    }> | import("react").ForwardRefExoticComponent<CardFeaturedTitleProps & {
        theme?: import("@rneui/base").Theme;
    }>;
    FeaturedSubtitle: import("react").FunctionComponent<CardFeaturedSubtitleProps & {
        theme?: import("@rneui/base").Theme;
    }> | import("react").ForwardRefExoticComponent<CardFeaturedSubtitleProps & {
        theme?: import("@rneui/base").Theme;
    }>;
};
export default ThemedCard;
export type { CardProps, CardDividerProps, CardFeaturedSubtitleProps, CardFeaturedTitleProps, CardImageProps, };
