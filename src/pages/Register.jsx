import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const { handleSignUpUser, setUser, updateUserProfile, sigInWithGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSigInGoogle = () => {
    sigInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Successfully signed in with Google!`, {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        toast.error(`Google Sign-In failed. Please try again.`, {
          position: "top-center",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long, include at least one uppercase letter, and one lowercase letter."
      );
      toast.error(
        `Password must be at least 6 characters long, include one uppercase letter, and one lowercase letter.`,
        {
          position: "top-center",
        }
      );
      return;
    }

    setError("");

    handleSignUpUser(email, password)
      .then((result) => {
        const newUser = result.user;

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...newUser, displayName: name, photoURL: photo });
            toast.success(`Account created successfully!`, {
              position: "top-center",
            });
            navigate("/");
          })
          .catch((error) => {
            toast.error(`Failed to update profile. Please try again.`, {
              position: "top-center",
            });
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError(
            "This email is already in use. Please try another email address."
          );
          toast.error(
            `This email is already in use. Please try another email address.`,
            {
              position: "top-center",
            }
          );
        } else {
          setError("Sign-up failed. Please try again.");
          toast.error("Sign-up failed. Please try again.");
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen border-t-4">
      <Helmet>
        <title>Discount PRO || Register Page</title>
      </Helmet>
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">
          Create Your Account
        </h1>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create Password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute text-xl right-4 top-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>

          <div className="form-control mt-4">
            <button
              onClick={handleSigInGoogle}
              className="btn btn-outline btn-primary w-10/12 mx-auto"
            >
              Register with Google
            </button>
          </div>

          <p className="text-center mt-4 pb-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
