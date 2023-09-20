import { useState } from "react";

const AuthProvider = ({children}) => {
    const {user,setUser}=useState(null)
    const {loading,setLoading}=useState(true);
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;