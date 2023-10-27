import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';
import Products from './components/pruducts/Products';
import MainServices from './components/mainServices/MainServices';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ProductCart from './components/productCart/ProductCart';
import CartDetail from './components/cartDetail/CartDetail';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

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
      { path: `/cart/:id`, element: <CartDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);

reportWebVitals();
