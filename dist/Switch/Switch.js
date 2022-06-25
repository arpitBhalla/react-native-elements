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
import { Switch as NativeSwitch, Platform, } from 'react-native';
import { defaultTheme } from '../helpers';
export const Switch = (_a) => {
    var _b, _c, _d;
    var { value = false, disabled = false, onValueChange, color = 'primary', style, theme = defaultTheme } = _a, rest = __rest(_a, ["value", "disabled", "onValueChange", "color", "style", "theme"]);
    const switchedOnColor = color === 'primary'
        ? ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary)
            ? theme.colors.primary
            : ''
        : color;
    const onTintColor = Platform.OS === 'ios' || !disabled
        ? switchedOnColor
        : ((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.disabled)
            ? theme.colors.disabled
            : '';
    const thumbTintColor = Platform.OS === 'ios'
        ? undefined
        : disabled || !value
            ? (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.disabled
            : switchedOnColor;
    const props = Platform.OS === 'web'
        ? {
            activeTrackColor: onTintColor,
            thumbColor: thumbTintColor,
            activeThumbColor: switchedOnColor,
        }
        : {
            thumbColor: thumbTintColor,
            trackColor: {
                true: onTintColor,
                false: '',
            },
        };
    return (React.createElement(NativeSwitch, Object.assign({ testID: "RNE__SWITCH", value: value, accessibilityState: {
            checked: value,
            disabled,
        }, disabled: disabled, onValueChange: disabled ? undefined : onValueChange, style: style }, props, rest)));
};
Switch.displayName = 'Switch';
