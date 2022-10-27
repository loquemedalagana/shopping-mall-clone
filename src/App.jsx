import React from 'react';
import { ThemeProvider } from '@mui/material';

import Header from 'src/components/header/Header';
import MuiTheme from 'src/styles/theme';

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <div>
        <Header />
        hello react
      </div>
    </ThemeProvider>
  );
}

export default App;
