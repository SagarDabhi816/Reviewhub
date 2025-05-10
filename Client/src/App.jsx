import { useState } from 'react'
import Loader from './assets/Loaders/Loader'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Routes/layout/layout'
import HomePage from './Routes/HomePage/Home';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import Profile from './Routes/ProfilePage/Profile';
// import reactLogo from './assets/Images/Logo.png'

function App() {


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        // ,
        // {
        //   path: "/list",
        //   element: <Listpage />,
        // },
        // {
        //   path: "/:id",
        //   element: <Singlepage/>,
        // },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
