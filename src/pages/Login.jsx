import { useContext, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

    const { handleLoginUser, setUser, sigInWithGoogle } =
    useContext(AuthContext);
  const emailRef = useRef();

    const handleSigInGoogle = () => {
      sigInWithGoogle()
        .then((result) => {
          setUser(result.user)
          Navigate('/')
      })
    }

  const handleForgetPassword = () => {
    // console.log('give a email', emailRef.current.value);
    const email = emailRef.current.value;
    // console.log(email);

    if (!email) {
      alert('plaes give a email');
    }
    else {
       sendPasswordResetEmail(auth, email)
      .then(() => {
       
          alert('please check your email')
        
    })
   }

}

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        handleLoginUser(email, password)
          .then((result) => {
            // console.log(result.user);
            setUser(result.user);
            e.target.reset();
            setError('')
          
          })
        // .catch((error) => setError(error.code));
        .catch((error) => setError('please give currect email and password'));
}
// console.log(error);
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
                    placeholder="email"
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
                  <label className="label">
                    <button
                      onClick={handleForgetPassword}
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </button>
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
                You no have account?{" "}
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