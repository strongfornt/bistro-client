import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoutes from './PrivateRoutes'
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";


   export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/menu',
            element:<Menu/>
        },
        {
            path:'/order/:category',
            element:<Order/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signUp',
          element:<SignUp/>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
      children:[
        //normal user routes
        {
          path:'dashboard',
          element:<Cart/>
        },
        //admin routes
        {
          path:'users',
          element:<AllUsers/>
        }
      ]
    }
  ]);