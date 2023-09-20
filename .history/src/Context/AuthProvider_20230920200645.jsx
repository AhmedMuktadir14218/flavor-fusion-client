
const AuthProvider = ({children}) => {
    const {user,setUser}=useS
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;