import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <div className="container mx-auto py-4 min-h-screen">
      {/* Profile Card */}
      <div
        className="flex flex-col justify-center relative items-center mt-6 border-2 mx-4   md:w-1/2 md:mx-auto"
        data-aos="fade-up"
      >
        {/* Welcome Section */}
        <div
          className="w-full h-[200px] bg-blue-200 flex justify-center items-center"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl font-bold text-blue-700">
            Welcome! {user?.displayName || "User"}!
          </h1>
        </div>

        {/* User Details Section */}
        <div
          className="flex flex-col items-center -mt-12"
          data-aos="fade-up"
          data-aos-delay="500" 
        >
          <img
            className="w-36 h-36 object-cover border-2 rounded-full"
            src={user?.photoURL || "https://via.placeholder.com/150"} // 
            alt="user Photo"
          />
          <h3 className="mt-4 text-xl font-semibold">{user?.displayName}</h3>
          <p className="text-gray-600">{user?.email}</p>
          <button
            onClick={() => navigate("/updateProfile")}
            className="mt-4 mb-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            data-aos="flip-up"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
