import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App, { router } from 'src/App';
import reportWebVitals from 'src/reportWebVitals';

import rootStore from 'src/stores/rootStore';
import { ThemeProvider } from '@mui/material';

import MuiTheme from 'src/styles/theme';
import { Provider as ReduxProvider } from 'react-redux/es/exports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={MuiTheme}>
    <ReduxProvider store={rootStore}>
      <App />
    </ReduxProvider>
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (window.Cypress) {
  window.store = rootStore;
}
