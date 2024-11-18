import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Brands from "../pages/Brands";
import MyProfile from "../private/MyProfile";
import AboutDev from "../pages/AboutDev";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import BrandDetails from "../private/BrandDetails";


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
          loader: () => fetch("/collection.json"),
        },
        {
          path: "brands",
          element: <Brands></Brands>,
          loader: () => fetch("/collection.json"),
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
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "/brandDetails/:id",
          element: <BrandDetails />,
          loader: async ({ params }) => {
            const response = await fetch("/collection.json");
            const data = await response.json();
            return data.find((brand) => brand._id === parseInt(params.id)); 
          },
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