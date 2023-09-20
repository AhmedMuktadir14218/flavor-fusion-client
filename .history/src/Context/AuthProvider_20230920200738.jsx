import { useState } from "react";

const AuthProvider = ({children}) => {
    const {user,setUser}=useState(null)
    const {loading,setLoading}=useState(true);

    const authInfo={
        user,
        lolading
    }
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;