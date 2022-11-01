import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import rootStore from 'src/stores/rootStore';
import routes from 'src/routes/routes';
import MuiTheme from 'src/styles/theme';

export const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <ReduxProvider store={rootStore}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
