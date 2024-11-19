import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
      <div className="container mx-auto py-4">
        {/* covar */}
        <div
          className="bg-cover bg-blue-300   bg-center h-64 flex items-center justify-center text-white"
        //   style={{
        //     backgroundImage: `url('https://via.placeholder.com/800x300?text=Welcome+to+Your+Profile')`,
        //   }}
            >
                
          <h1 className="text-4xl font-bold text-blue-700">
            Welcome! {user?.displayName || "User"}!
          </h1>
        </div>
        {/* profile cart */}
        <div className="flex flex-col justify-center items-center mt-6 border-2 w-1/2 mx-auto py-4">
          <img className="w-32 h-32 object-cover rounded-full" src={user.photoURL} alt="user Photo" />
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Update Profile
          </button>
        </div>
        My Profile Page....
      </div>
    );
};

export default MyProfile;