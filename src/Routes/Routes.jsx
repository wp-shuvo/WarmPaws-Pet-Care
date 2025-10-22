import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayouuts from '../Layout/MainLayouuts';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import MyProfile from '../Pages/MyProfile';

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
    ],
  },
]);

export default router;
