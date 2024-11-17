import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const handleSignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const handleLoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
            setUser(currectUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])
    
    const handleLogOut = () => {
      return  signOut(auth)
            
    }



    
    const authInfo = {
      name: "arman mai",
      user,
      setUser,
      setLoader,
      handleSignUpUser,
      handleLoginUser,
      handleLogOut,
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;