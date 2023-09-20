import { createContext } from "react";
import { useState } from "react";
import { getAuth } from 'firebase/auth';
import   app  from '../Firebase/firebase.config';


export const AuthContext =createContext(null);

const Auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const authInfo={
        user,
        loading
    }
    return (
        <AuthContextProvider value={authInfo}>
            {children}
        </AuthContextProvider>
    );
};

export default AuthProvider;