
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../shared/errorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import Collage from "../pages/Collage";
import Admission from "../pages/Admission";
import MyCollage from "../pages/MyCollage";
import Login from "../pages/login";
import Register from "../pages/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
        path: '/collage',
        element: <Collage></Collage>
        },
        {
            path: '/admission',
            element: <Admission></Admission>
        },
        {
            path: 'myCollage',
            element: <PrivateRoute><MyCollage></MyCollage></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

export default router;