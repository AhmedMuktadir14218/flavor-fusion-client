import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Authentication/Login/Login";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        
        path:'/',
        element:<Home></Home>
      },
      {
        
        path:'menu',
        element:<Menu></Menu>
      },
      {
        
        path:'order/:category',
        // path:'/order',
        element:<Order></Order>
      },
      {
        
        path:'login',
        // path:'/order',
        element:<Login></Login>
      },
      {
        
        path:'signup',
        // path:'/order',
        element:<Login></Login>
      },
      ]
    },
  ]);