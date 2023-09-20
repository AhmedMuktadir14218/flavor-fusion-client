import { useState } from "react";

const AuthProvider = ({children}) => {
    const {user,setUser}=useState(null)
    const {loading,setLoading}=useState(true);

    const authInfo={
        user,
        loading
    }
    return (
        <AuthProvider value={}>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;