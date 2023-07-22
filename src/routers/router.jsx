
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../shared/errorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;