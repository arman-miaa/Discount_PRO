import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Loader from "../pages/Loader";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const sigInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const handleSignUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
      setUser(currectUser);
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const handleLogOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    name: "arman mai",
    user,
    setUser,
    setLoader,
    handleSignUpUser,
    handleLoginUser,
    handleLogOut,
    updateUserProfile,
    sigInWithGoogle,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {loader ? (
          <div>
            <Loader></Loader>
          </div>
        ) : (
          children
        )}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
