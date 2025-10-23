import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayouuts from '../Layout/MainLayouuts';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import MyProfile from '../Pages/MyProfile';
import ContactUs from '../Components/ContactUs/ContactUs';
import Login from '../Components/LogInOut/Login';
import Register from '../Components/LogInOut/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouuts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/myprofile',
        element: <MyProfile />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
