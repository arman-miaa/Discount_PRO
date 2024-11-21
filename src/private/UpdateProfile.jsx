import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

   
    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        navigate("/myProfile");
         toast.success("Updated Your profile successfully ", {
           position: "top-center",
         });
      })
      .catch((error) => {
         toast.success(" profile update error ", {
           position: "top-center",
         });
      });
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Helmet>
        <title>Update Profile Page</title>
      </Helmet>
      <Header />

      <div className="container mx-auto py-8 px-4 md:px-12">
        <div className="max-w-lg md:mt-16 mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
            Update Your Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full p-3 border-gray-300 focus:ring-2 focus:ring-blue-300 rounded-md"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full p-3 border-gray-300 focus:ring-2 focus:ring-blue-300 rounded-md"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full py-3  font-semibold text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
