import React from 'react';
import { View, FlexStyle } from 'react-native';
import { makeStyles } from '../system/makeStyles';

export interface StackProps {
  /* */
  align?: FlexStyle['alignItems'];
  /*  */
  justify?: FlexStyle['justifyContent'];
  /**
   * @default column
   */
  dir?: 'row' | 'column';
  /*  */
  spacing?: 'sm' | 'md' | 'lg' | number;
  /*  */
  reverse?: boolean;
  /*  */
  children?: React.ReactNode;
}

/**
 *
 * @usage
 *
 * ```tsx live
 * <Stack spacing="md">
 *
 * </Stack>
 * ```
 *
 */
export const Stack = ({ children, ...rest }: StackProps): JSX.Element => {
  const styles = useStyles(rest);

  return (
    <View style={styles.container}>
      {React.Children.map(children, (child) => {
        return <View style={styles.childProps}>{child}</View>;
      })}
    </View>
  );
};

const useStyles = makeStyles((props: StackProps) => ({
  container: {
    display: 'flex',
    flexDirection: (props.dir +
      (props.reverse ? '-reverse' : '')) as FlexStyle['flexDirection'],
    alignItems: props.align,
    justifyContent: props.justify,
  },
  childProps: {
    padding: props.spacing,
  },
}));
