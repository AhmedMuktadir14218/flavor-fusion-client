import { createContext, useEffect } from "react";
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import   app  from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password);
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(Auth,email,password)
    }
    const signWithGoolgle = ()=>{
        return signInWithEmailAndPassword(Auth,email,password)
    }

    const logOut =()=>{
        signOut(Auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(Auth, currentUser =>{
        console.log('auth state change', currentUser);
        setUser(currentUser)
        setLoading(false)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    

    const authInfo={
        user,
        createUser,
        loginUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;