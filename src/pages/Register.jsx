import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { handleSignUpUser, setUser, updateUserProfile } =
    useContext(AuthContext);

  const [error, setError] = useState(""); // Single error state for all validation issues

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password Regex Validation
   let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter,"
      );
      return;
    }

    setError(""); // Clear error if validation passes

    // Sign-up user
    handleSignUpUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");

        // Update user profile
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/"); // Navigate to the home page on success
          })
          .catch((error) => console.log("Profile update error:", error));
      })
      .catch((error) => {
        console.log("Sign-up error:", error);
        setError("Sign-up failed. Please try again.");
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Error Display */}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              {/* Register with Google */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">
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
