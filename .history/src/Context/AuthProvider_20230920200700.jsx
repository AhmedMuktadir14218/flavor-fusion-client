import { useState } from "react";

const AuthProvider = ({children}) => {
    const {user,setUser}=useState(null)
    const {user,setLoading}=useState(null)
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;