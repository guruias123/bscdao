import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './Router'
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Layout';
import Ramper from './Ramper/Ramper';
// import Router from './Router/index'

// ReactDOM.render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Layout /> */}
    
    <Router />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
