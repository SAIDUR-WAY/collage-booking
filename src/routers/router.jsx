
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
            element: <MyCollage></MyCollage>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

export default router;