import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { handleLoginUser, setUser, sigInWithGoogle } = useContext(AuthContext);
  const emailRef = useRef();

  // Handle Google Sign-In
  const handleSigInGoogle = () => {
    sigInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
        toast.success("Logged in successfully with Google!", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast.error("Failed to log in with Google. Please try again.", {
          position: "top-center",
        });
      });
  };

  // Handle Forget Password
  const handleForgetPassword = (e) => {
    e.preventDefault(); // Prevent default link navigation behavior
    const email = emailRef.current.value;
    navigate("/resetPassword", { state: { email } });
    // console.log(email); 
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
        navigate("/");
      })
      .catch((error) => {
        setError("Please provide a valid email and password.");
        toast.error("Invalid email or password. Please try again.", {
          position: "top-center",
        });
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <h1 className="text-2xl font-semibold">Login Page</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-4 top-12"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <label className="label">
                  <div
                    onClick={handleForgetPassword}
                    type="button"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </div>
                </label>
                <p className="text-red-800">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="form-control mt-6">
              <button onClick={handleSigInGoogle} className="btn btn-primary">
                Login with Google
              </button>
            </div>
            <p>
              Don't have an account?{" "}
              <span className="text-red-500 underline">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
