import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './components/pruducts/Products';
import MainServices from './components/mainServices/MainServices';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/',
        element: <MainServices />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
