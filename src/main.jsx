import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider } from "react-router-dom";
import router from './router/Router';
import './index.css';
import AuthProviders from './Providers/AuthProviders.jsx';
import DataProvider from './Providers/DataProvider.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </AuthProviders>
  </React.StrictMode>
);
