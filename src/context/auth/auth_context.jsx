// Imports
import { createContext,useContext, useMemo } from "react";
import {useCookies}from "react-cookie";
import axios from 'axios';


const AuthContext = createContext();

export default function AuthProvider({children}){

    const [cookies,setCookies,removeCookie] =useCookies();

    // Login function
    async function login(formData){
        try {
            
            let res = await axios.post("http://localhost:3000/api/auth",formData);
            // take token from response and set to cookies
            setCookies('token',res.data.token);
        } catch (error) {
            console.error(error);
        }
        
        
    }
    // Register function
    async function signUp(formData){
        try {
            
            let res = await axios.post("http://localhost:3000/api/endusers",formData);
            // take token from response and set to cookies
            setCookies('token',res.data.token);
        } catch (error) {
            console.error(error);
        }
    }
    // Logout function
    function logout(){
        ['token'].forEach((obj)=> removeCookie(obj))
    }

    const value = useMemo(()=>({
        cookies,
        login,
        logout,
        signUp
    }),[cookies])
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//useContext(AuthContext) allows any component to access authentication data stored in AuthContext.
//useAuth() acts as a wrapper around useContext(AuthContext), making it cleaner to use in components.
//This avoids repetitive imports of useContext(AuthContext) throughout your app.
export function useAuth(){
    return useContext(AuthContext)
}