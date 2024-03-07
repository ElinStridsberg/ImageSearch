import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.tsx';

ReactDOM.render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    <Auth0Provider
      domain="dev-qf64t61vx0x6pt6f.us.auth0.com"
      clientId="OVpdUZAVMDPUYlwLJiuDMZynSnG75PGu"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
        <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
