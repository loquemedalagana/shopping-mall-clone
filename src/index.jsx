import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from 'src/App';
import reportWebVitals from 'src/reportWebVitals';

import rootStore from 'src/stores/rootStore';
import { ThemeProvider } from '@mui/material';

import MuiTheme from 'src/styles/theme';
import AppProvider from 'src/stores/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={MuiTheme}>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>,
);

reportWebVitals();

if (window.Cypress) {
  window.store = rootStore;
}
