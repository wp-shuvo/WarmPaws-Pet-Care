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
import UpdateProfile from '../Pages/MyProfile/UpdateProfile';
import ServicesHome from '../Components/Services/ServicesHome';
import ErrrorPage from '../Components/ErrorPage/ErrrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouuts />,
    errorElement: <ErrrorPage />,
    hydrateFallbackElement: (
      <div className=" w-full h-full flex justify-center mt-2.5 ">
        <span className="loading loading-dots content-center loading-xl"></span>
      </div>
    ),
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
          const res = await fetch('/serviecs.json');
          const data = await res.json();
          const singleData = data.find(s => s.serviceId == params.serviceId);
          console.log(singleData);
          return singleData;
        },
      },
      {
        path: '/services',
        element: (
          <PrivateRoutes>
            <ServicesHome />
          </PrivateRoutes>
        ),
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
        path: '/updateprofile',
        element: (
          <PrivateRoutes>
            <UpdateProfile />
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
