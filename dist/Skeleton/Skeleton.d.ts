import React from 'react';
import { ViewProps, StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface SkeletonProps extends ViewProps {
    circle?: boolean;
    width?: number;
    height?: number;
    animation?: 'none' | 'pulse' | 'wave';
    skeletonStyle?: StyleProp<ViewStyle>;
    LinearGradientComponent?: React.ComponentType<any>;
}
export declare const Skeleton: RneFunctionComponent<SkeletonProps>;
