
const AuthProvider = ({children}) => {
    const {user,setUser}=
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;