import { withTheme } from '@rneui/themed';
import React from 'react';

interface SnackBarProps {
  open: boolean;
}

const Snackbar = () => <></>;

export default withTheme(Snackbar, 'Snackbar');

declare module '@rneui/themed' {
  export interface ComponentTheme {
    Snackbar: Partial<SnackBarProps>;
  }
}
