import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Routes.jsx';
import AuthProvider from './Context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      
     </AuthProvider>
   
  </React.StrictMode>,
)
