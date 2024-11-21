import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

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
        `Password must be at least 6 characters long, include one uppercase letter, and one lowercase letter.`, {
          position:"top-center",
        }
      );
      return;
    }

    setError("");

    // Sign-up user
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
            // console.log("Profile update error:", error);
            toast.error(`Failed to update profile. Please try again.`, {
              position: "top-center",
            });
          });
      })
      .catch((error) => {
        // console.log("Sign-up error:", error);
        
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
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <h1 className="text-2xl font-semibold">Sign-Up Page</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-4 top-12"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
                </button>
              </div>

              {/* Error Display */}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              {/* Register with Google */}
              <div className="form-control mt-6">
                <button onClick={handleSigInGoogle} className="btn btn-primary">
                  Register with Google
                </button>
              </div>
            </form>

            {/* Redirect to Login */}
            <p className="mt-4">
              Already have an account?{" "}
              <span className="text-red-500 underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
