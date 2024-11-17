import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Header></Header>,
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