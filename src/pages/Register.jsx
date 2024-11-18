import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const navigate = useNavigate();
    const { handleSignUpUser, setUser, updateUserProfile } =
      useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        // console.log(form);
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        handleSignUpUser(email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
                
                  updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                      navigate("/");
                    })
                    .catch((error) => console.log(error));
            })
        .catch(error=>console.log('ERROR',error))
    }
    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <h1 className="text-2xl font-semibold">SinUp Page</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                                    type="email"
                                    name="email"
                    placeholder="email"
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
                 
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register with Google</button>
                </div>
              </form>
              <p>
                You alredy have an account?{" "}
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