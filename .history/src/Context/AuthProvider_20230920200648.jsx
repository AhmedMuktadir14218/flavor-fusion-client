import { useState } from "react";

const AuthProvider = ({children}) => {
    const {user,setUser}=useState()
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;