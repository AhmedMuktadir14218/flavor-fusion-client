import { createContext } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import   app  from '../Firebase/firebase.config';


export const AuthContext =createContext(null);

const Auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password);
    }
    const loginUser = (email,password)=>{
        return sign
    }

    const authInfo={
        user,
        createUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;