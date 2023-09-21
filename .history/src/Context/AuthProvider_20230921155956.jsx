import { createContext } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import   app  from '../Firebase/firebase.config';


export const AuthContext =createContext(null);

const Auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password);
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(Auth,email,password)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(Auth, currentUser =>)
    
      return () => {
        unsubscribe()
      }
    }, [])
    

    const authInfo={
        user,
        createUser,
        loginUser,

        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;