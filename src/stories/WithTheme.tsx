import React from 'react';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from '../theme';

const withThemeProvider = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withThemeProvider;
