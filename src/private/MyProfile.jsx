import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
  console.log(user);
  return (
    <div className="container mx-auto py-4 min-h-screen">
      {/* covar */}
      {/* <div className="bg-cover bg-blue-300   bg-center h-64 flex items-center justify-center text-white"></div> */}
      {/* profile cart */}
      <div className="flex flex-col justify-center relative items-center mt-6 border-2 w-1/2 mx-auto ">
        <div className="w-full h-[200px] bg-blue-200 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-blue-700">
            Welcome! {user?.displayName || "User"}!
          </h1>
        </div>
        <div className="flex flex-col items-center -mt-12">
          <img
            className="w-36 h-36 object-cover  border-2 rounded-full"
            src={user?.photoURL}
            alt="user Photo"
          />
          <h3 className="mt-4">{user.displayName}</h3>
          <p>{user.email}</p>
          <button
            onClick={() => navigate("/updateProfile")}
            className="mt-4 mb-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
