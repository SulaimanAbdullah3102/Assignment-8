import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Errorpage from './components/Errorpage';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard';
import Root from './components/Root';
import Allproducts from './components/Allproducts';
import Details from './components/Details';
import Laptop from './components/Category/Laptop';
import Phones from './components/Category/Phones';
import Accessories from './components/Category/Accessories';
import Macbook from './components/Category/Macbook';
import Iphone from './components/Category/Iphone';
import Smartwatch from './components/Category/Smartwatch';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children : [
          {
            path: "/",
            element: <Allproducts></Allproducts>
          },
          {
            path: "/laptop",
            element: <Laptop></Laptop>,
            loader : () => fetch('public/products.json')
          },
          {
            path: "/phones",
            element: <Phones></Phones>,
            loader : () => fetch('public/products.json')
          },
          {
            path: "/accessories",
            element:<Accessories></Accessories>,
            loader : () => fetch('public/products.json')
          },
          {
            path: "/macbook",
            element: <Macbook></Macbook>,
            loader : () => fetch('public/products.json')
          },
          {
            path: "/iphone",
            element: <Iphone></Iphone>,
            loader : () => fetch('public/products.json')
          },
          {
            path: "/smartwatch",
            element: <Smartwatch></Smartwatch>,
            loader : () => fetch('public/products.json')
          }
        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader : () => fetch('public/products.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader : () => fetch('public/products.json')
      },
      {
        path: "/product/:product_id",
        element: <Details></Details>,
        loader : () => fetch('public/products.json')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
