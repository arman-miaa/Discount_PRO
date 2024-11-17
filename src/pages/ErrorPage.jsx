import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();
    return (
      <div className=" flex flex-col justify-center items-center min-h-screen">
        <p className="text-3xl font-semibold">Error Page</p>
        <span className="text-3xl font-semibold"> Bank To
          <Link className="text-red-600 underline" to="/"> Home</Link>
        </span>
      </div>
    );
};

export default ErrorPage;