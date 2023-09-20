
const AuthProvider = ({children}) => {
    const {user}
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;