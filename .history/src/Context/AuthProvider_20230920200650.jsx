import { useState } from "react";

const AuthProvider = ({children}) => {
    const {user,setUser}=useState(null)
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;