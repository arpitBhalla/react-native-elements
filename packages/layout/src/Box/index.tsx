import React from 'react';
import { ColorValue, View } from 'react-native';
import { makeStyles } from '../system/makeStyles';

type directionShort = 'l' | 'r' | 't' | 'b' | 'x' | 'y' | '';
type direction =
  | ''
  | 'Left'
  | 'Right'
  | 'Top'
  | 'Bottom'
  | 'Horizontal'
  | 'Vertical';

type styleNameShort = 'm' | 'p';
type styleName = 'margin' | 'padding';

type SystemProp =
  | `${styleName}${direction}`
  | `${styleNameShort}${directionShort}`;

export interface BoxProps extends Record<SystemProp, string | number> {
  bgColor?: ColorValue;

  h?: number;
  w?: number;
  height?: number;
  width?: number;

  children?: React.ReactNode;
}

/**
 *
 * @usage
 *
 * ```tsx live
 * <Box spacing="md">
 *
 * </Box>
 * ```
 *
 */
export const Box = ({ children, ...rest }: BoxProps): JSX.Element => {
  const styles = useStyles(rest);

  return <View style={styles.container}>{children}</View>;
};

const useStyles = makeStyles(
  ({
    h,
    height,
    w,
    width,
    m,
    margin,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    padding,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingVertical,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    bgColor,
  }: BoxProps) => {
    return {
      container: {
        height: h || height,
        width: w || width,
        backgroundColor: bgColor,
        margin: m || margin,
        marginBottom: mb || marginBottom,
        marginLeft: ml || marginLeft,
        marginRight: mr || marginRight,
        marginTop: mt || marginTop,
        marginHorizontal: mx || marginHorizontal,
        marginVertical: my || marginVertical,
        padding: p || padding,
        paddingBottom: pb || paddingBottom,
        paddingLeft: pl || paddingLeft,
        paddingRight: pr || paddingRight,
        paddingTop: pt || paddingTop,
        paddingHorizontal: px || paddingHorizontal,
        paddingVertical: py || paddingVertical,
      },
    };
  }
);
