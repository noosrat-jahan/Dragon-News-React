import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from "../Firebase/Firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   

    const createNewUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }

    const GoogleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }

    const logOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    
    const authInfo = { user, loading, setUser, createNewUser, signInUser, updateUserProfile, GoogleSignIn, logOutUser}

    // keep the signed in user data by using observer method.
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;