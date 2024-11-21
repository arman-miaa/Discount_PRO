import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <Helmet>
        <title>Discount PRO || Error Page</title>
      </Helmet>
      <p className="text-3xl font-semibold">404 - Page Not Found</p>
      <p className="py-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <span className="text-3xl font-semibold">
        Go Back To
        <Link className="text-red-600 underline" to="/">
          {" "}
          Home
        </Link>
      </span>
    </div>
  );
};

export default ErrorPage;
