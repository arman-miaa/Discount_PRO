import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navbar></Navbar>,
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