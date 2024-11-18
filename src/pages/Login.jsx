import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

    const { handleLoginUser, setUser, sigInWithGoogle } =
      useContext(AuthContext);

    const handleSigInGoogle = () => {
        sigInWithGoogle();
    }



    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        handleLoginUser(email, password)
          .then((result) => {
            console.log(result.user);
            setUser(result.user);
          })
          .catch((error) => console.log("ERROR", error));
}

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
                                    placeholder="email"
                                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                                    type="password"
                                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                        </form>
                <div className="form-control mt-6">
                  <button onClick={handleSigInGoogle} className="btn btn-primary">Login with Google</button>
                </div>
                        <p>You no have account? <span className="text-red-500 underline"><Link to='/register'>Register</Link></span></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;