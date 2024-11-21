import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLoginUser, setUser, sigInWithGoogle } = useContext(AuthContext);
  const emailRef = useRef();

  // Handle Google Sign-In
  const handleSigInGoogle = () => {
    sigInWithGoogle()
      .then((result) => {
        setUser(result.user);
        const from = location.state?.from?.pathname || "/";
        navigate(from);
        toast.success("Logged in successfully with Google!", {
          position: "top-center",
        });
      })
      .catch(() => {
        toast.error("Failed to log in with Google. Please try again.", {
          position: "top-center",
        });
      });
  };

  // Handle Forget Password
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    navigate("/resetPassword", { state: { email } });
  };

  // Handle User Login
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    handleLoginUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in successfully!", { position: "top-center" });
        form.reset();
        setError("");
        const from = location.state?.from?.pathname || "/"; 
        navigate(from);
      })
      .catch(() => {
        setError("Please provide a valid email and password.");
        toast.error("Invalid email or password. Please try again.", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="hero bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Discount PRO || Login Page</title>
      </Helmet>
      <div className="hero-content flex-col max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Welcome Back!
        </h1>
        <form onSubmit={handleLogIn} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              name="email"
              className="input input-bordered border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 w-full"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              className="input input-bordered border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[51px] text-xl text-gray-500 hover:text-blue-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="text-right">
            <button
              onClick={handleForgetPassword}
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot password?
            </button>
          </div>
          <button className="btn btn-primary w-full py-3 font-semibold text-lg">
            Login
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleSigInGoogle}
            className="btn btn-outline btn-primary w-full py-3 font-semibold flex items-center justify-center space-x-2"
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Login with Google</span>
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
