import React, { createContext, useContext, useState } from 'react'
export const AuthContext=createContext();


export default function AuthProvider({children}) {
    const intialAuthUser=localStorage.getItem("Users");
    const[AuthUser,setAuthUser]=useState(
        intialAuthUser?JSON.stringify(intialAuthUser):undefined
    );
    return <AuthContext.Provider value={[AuthUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext);
