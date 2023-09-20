import { createContext } from "react";
import { useState } from "react";

export const AuthContext =createContext(null);

const Auth = getAuth

const AuthProvider = ({children}) => {
    const {user,setUser}=useState(null)
    const {loading,setLoading}=useState(true);

    const authInfo={
        user,
        loading
    }
    return (
        <AuthProvider value={authInfo}>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;