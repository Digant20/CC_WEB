import { createContext, useContext, useState } from "react";
import { theDefaultJwt } from "./theJwt";


const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{

    const[theNewJwt, setTheNewJwt] = useState(theDefaultJwt)
    

    const login = theJWT=>{
        setTheNewJwt(theJWT)
        localStorage.setItem('theJWT', JSON.stringify(theJWT));
        
    }

    const logout = ()=>{
        localStorage.removeItem('theJWT');
        setTheNewJwt(theDefaultJwt)
    }

    return( <AuthContext.Provider value={{theNewJwt, login, logout}}>
        {children}
    </AuthContext.Provider>)
    
}

export const useAuth = () =>{
    return useContext(AuthContext);
}
