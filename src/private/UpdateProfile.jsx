import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const UpdateProfile = () => {
    const { user,updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked btn');
        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
     
        console.log(name,photo);
        // Update user profile
         updateUserProfile({ displayName: name, photoURL: photo })
           .then(() => {
             navigate("/myProfile"); 
           })
           .catch((error) => console.log("Profile update error:", error));
       
    }

    useEffect(() => {
        if (!user) {
          navigate("/login");
        }
   },[])
    return (
      <div className="container mx-auto py-4">
        <Header></Header>
       
        {/* update profile */}
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

              

                

               
                {/* Submit Button */}
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Save change</button>
                </div>

               
              </form>

            
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateProfile;