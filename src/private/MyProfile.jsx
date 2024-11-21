import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Helmet>
        <title>Discount PRO || Profile Page</title>
      </Helmet>
      <div className="container mx-auto py-8 px-4 md:px-12">
        {/* Profile Card */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center md:w-1/2 mx-auto mt-6"
          data-aos="fade-up"
        >
          {/* Welcome Section */}
          <div className="w-full h-[220px] bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 flex justify-center items-center">
            <h1 className="text-3xl font-bold text-white text-center">
              Welcome, {user?.displayName || "User"}!
            </h1>
          </div>

          {/* User Details Section */}
          <div
            className="flex flex-col items-center -mt-16 space-y-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              className="w-36 h-36 object-cover border-4 border-white rounded-full shadow-md"
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="user Photo"
            />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">
              {user?.displayName}
            </h3>
            <p className="text-lg text-gray-500">{user?.email}</p>
            <div className="pb-8">
              <button
                onClick={() => navigate("/updateProfile")}
                className=" px-6 py-2 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                data-aos="flip-up"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
