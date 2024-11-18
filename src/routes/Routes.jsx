import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Brands from "../pages/Brands";
import MyProfile from "../private/MyProfile";
import AboutDev from "../pages/AboutDev";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/collection.json'),
        },
        {
          path: "brands",
          element: <Brands></Brands>,
        },
        {
          path: "myProfile",
          element: <MyProfile></MyProfile>,
        },
        {
          path: "aboutDev",
          element: <AboutDev></AboutDev>,
        },
        {
          path: 'login',
          element:<Login></Login>,
        },
        {
          path: 'register',
          element:<Register></Register>,
        },
      ],
    },
  ],

  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);



export default router;