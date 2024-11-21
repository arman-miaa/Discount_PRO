import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [error, setError] = useState("");
  const { handleLogOut } = useContext(AuthContext);

  useEffect(() => {
    if (location.state?.email) {
      console.log("Email from location.state:", location.state.email); 
      setEmail(location.state.email); 
    } else {
      console.log("No email found in state."); 
    }
  }, [location.state?.email]);

  const handleResetPassword = () => {
    if (!email) {
      toast.error("Email is required to reset password", {
        position: "top-center",
      });
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent. Check your inbox!", {
          position: "top-center",
        });

          window.open("https://mail.google.com/mail/u/0/?authuser=0", "_blank");
        navigate('/login')
        handleLogOut()
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Failed to send reset email. Please try again.", {
          position: "top-center",
        });
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title> Reset Password Page</title>
      </Helmet>
      <div className="hero-content flex-col">
        <h1 className="text-2xl font-semibold">Reset Password Page</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                name="email"
                className="input input-bordered"
                placeholder="Enter your email"
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <Link onClick={handleResetPassword} className="btn btn-primary">
                Reset Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
