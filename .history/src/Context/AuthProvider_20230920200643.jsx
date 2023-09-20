
const AuthProvider = ({children}) => {
    const {user,setUser}=use
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;