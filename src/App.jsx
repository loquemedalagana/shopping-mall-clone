import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from 'src/routes/routes';

export const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
