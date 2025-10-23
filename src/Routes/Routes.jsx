import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayouuts from '../Layout/MainLayouuts';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import ContactUs from '../Components/ContactUs/ContactUs';
import Login from '../Components/LogInOut/Login';
import Register from '../Components/LogInOut/Register';
import MyProfile from '../Pages/MyProfile/MyProfile';
import PrivateRoutes from './PrivateRoutes';
import ForgetPass from '../Components/LogInOut/ForgetPass';

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
        path: '/services/:serviceId',
        element: (
          <PrivateRoutes>
            <Services />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const res = await fetch('/public/serviecs.json');
          const data = await res.json();
          const singleData = data.find(s => s.serviceId == params.serviceId);
          console.log(singleData);
          return singleData;
        },
      },
      {
        path: '/myprofile',
        element: (
          <PrivateRoutes>
            <MyProfile />
          </PrivateRoutes>
        ),
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
      {
        path: '/forgetPassword',
        element: <ForgetPass />,
      },
    ],
  },
]);

export default router;
