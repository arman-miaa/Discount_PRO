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
import Private from "../private/Private";
import UpdateProfile from "../private/UpdateProfile";
import ResetPassword from "../pages/ResetPassword";


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
          element: (
            <Private>
              <MyProfile></MyProfile>
            </Private>
          ),
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
    {
      path: 'updateProfile',
      element: <UpdateProfile></UpdateProfile>,
    },
    {
      path: 'resetPassword',
      element: <ResetPassword></ResetPassword>,
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