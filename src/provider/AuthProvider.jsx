import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    
    // console.log(user);

    const sigInWithGoogle = () => {
        return signInWithPopup(auth,provider)
    }
    
    const handleSignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            // setLoader(false);
        
    }


    const handleLoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
            // setLoader(false);

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
            setUser(currectUser);
            setLoader(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };
    // console.log(updatedData);
    
    const handleLogOut = () => {
        return signOut(auth)
            // setLoader(false);
        
            
    }



    
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
          {loader ? <div>Loading...</div> : children}
        </AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;