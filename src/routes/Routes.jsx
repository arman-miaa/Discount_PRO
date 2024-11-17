import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Brands from "../pages/Brands";
import MyProfile from "../private/MyProfile";
import AboutDev from "../pages/AboutDev";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
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