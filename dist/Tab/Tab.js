var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, Animated, StyleSheet, ScrollView, } from 'react-native';
import { defaultTheme } from '../helpers';
export const TabBase = (_a) => {
    var _b, _c;
    var { theme = defaultTheme, children, value, scrollable = false, onChange = () => { }, indicatorStyle, disableIndicator, variant, containerStyle } = _a, rest = __rest(_a, ["theme", "children", "value", "scrollable", "onChange", "indicatorStyle", "disableIndicator", "variant", "containerStyle"]);
    const animationRef = React.useRef(new Animated.Value(0));
    const scrollViewRef = React.useRef(null);
    const scrollViewPosition = React.useRef(0);
    const validChildren = React.Children.toArray(children);
    const tabItemsPosition = React.useRef([]);
    const [tabContainerWidth, setTabContainerWidth] = React.useState(0);
    const scrollHandler = React.useCallback((currValue) => {
        if (tabItemsPosition.current.length > currValue) {
            let itemStartPosition = currValue === 0
                ? 0
                : tabItemsPosition.current[currValue - 1].position;
            let itemEndPosition = tabItemsPosition.current[currValue].position;
            const scrollCurrentPosition = scrollViewPosition.current;
            const tabContainerCurrentWidth = tabContainerWidth;
            let scrollX = scrollCurrentPosition;
            if (itemStartPosition < scrollCurrentPosition) {
                scrollX += itemStartPosition - scrollCurrentPosition;
            }
            else if (scrollCurrentPosition + tabContainerCurrentWidth <
                itemEndPosition) {
                scrollX +=
                    itemEndPosition -
                        (scrollCurrentPosition + tabContainerCurrentWidth);
            }
            scrollViewRef.current.scrollTo({
                x: scrollX,
                y: 0,
                animated: true,
            });
        }
    }, [tabContainerWidth]);
    React.useEffect(() => {
        Animated.timing(animationRef.current, {
            toValue: value,
            useNativeDriver: true,
            duration: 170,
        }).start();
        scrollable && requestAnimationFrame(() => scrollHandler(value));
    }, [animationRef, scrollHandler, value, scrollable]);
    const onScrollHandler = React.useCallback((event) => {
        scrollViewPosition.current = event.nativeEvent.contentOffset.x;
    }, []);
    const indicatorTransitionInterpolate = React.useMemo(() => {
        const countItems = validChildren.length;
        if (countItems < 2 || !tabItemsPosition.current.length) {
            return 0;
        }
        const inputRange = [...Array(tabItemsPosition.current.length).keys()];
        const outputRange = tabItemsPosition.current.map(({ position }) => position);
        return animationRef.current.interpolate({
            inputRange,
            outputRange: [0, ...outputRange].slice(0, -1),
        });
    }, [animationRef, validChildren]);
    const WIDTH = React.useMemo(() => {
        var _a;
        return (_a = tabItemsPosition.current[value]) === null || _a === void 0 ? void 0 : _a.width;
    }, [value, tabItemsPosition.current.length]);
    return (React.createElement(View, Object.assign({}, rest, { accessibilityRole: "tablist", style: [
            variant === 'primary' && {
                backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary,
            },
            styles.viewStyle,
            containerStyle,
        ], onLayout: ({ nativeEvent: { layout } }) => {
            setTabContainerWidth(layout.width);
        } }), React.createElement(scrollable ? ScrollView : React.Fragment, Object.assign(Object.assign({}, (scrollable && {
        horizontal: true,
        ref: scrollViewRef,
        onScroll: onScrollHandler,
        showsHorizontalScrollIndicator: false,
    })), { children: (React.createElement(React.Fragment, null,
            validChildren.map((child, index) => {
                return React.cloneElement(child, {
                    onPress: () => onChange(index),
                    onLayout: (event) => {
                        var _a;
                        const { width } = event.nativeEvent.layout;
                        const previousItemPosition = ((_a = tabItemsPosition.current[index - 1]) === null || _a === void 0 ? void 0 : _a.position) || 0;
                        tabItemsPosition.current[index] = {
                            position: previousItemPosition + width,
                            width,
                        };
                    },
                    active: index === value,
                    variant,
                });
            }),
            !disableIndicator && (React.createElement(Animated.View, { style: [
                    styles.indicator,
                    {
                        backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.secondary,
                        transform: [
                            {
                                translateX: indicatorTransitionInterpolate,
                            },
                        ],
                        width: WIDTH,
                    },
                    indicatorStyle,
                ] })))) }))));
};
const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    titleStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        textTransform: 'uppercase',
    },
    containerStyle: {
        flex: 1,
        borderRadius: 0,
    },
    viewStyle: {
        flexDirection: 'row',
        position: 'relative',
    },
    indicator: {
        display: 'flex',
        position: 'absolute',
        height: 2,
        bottom: 0,
    },
});
TabBase.displayName = 'Tab';
