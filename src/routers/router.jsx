
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
import CollageDetails from "../component/CollageDetails";
import StudentAdmission from "../component/StudentAdmission";


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
        },
        {
          path: '/collageDetails/:id',
          element: <PrivateRoute><CollageDetails></CollageDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://collage-booking-server-sigma.vercel.app/collages/${params.id}`)
        },
        {
          path: '/studentAdmission',
          element: <PrivateRoute><StudentAdmission></StudentAdmission></PrivateRoute>,

        }
      ]
    },
  ]);

export default router;