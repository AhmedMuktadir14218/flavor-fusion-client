import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl max'>
      
     <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
