import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import routes from 'src/routes/routes';
import MuiTheme from 'src/styles/theme';

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
