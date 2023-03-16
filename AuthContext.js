import React,{useContext,useState, useEffect} from "react"
import { Auth } from "../firebase"

const AuthContext= React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    const[currentUser, setCurrentUser] = useState()
    const[loading, setLoading] = useState(true)
     
    function Signup(email , password){
        return Auth.createUserWithEmailAndPassword(email, password)
    }

    function Login(email , password){
        return Auth.createUserWithEmailAndPassword(email, password)
    }
    function Logout(){
        return Auth.signout()
    }
    function resetPassword(email){
        return Auth.sendPasswordResetEmail(email, )
    }
    function updateEmail(email){
        return Auth.updateEmail(email )
    }
    function updatePassword(password){
        return Auth.updatePassword(password )
    }

    useEffect (() => {
        const unsubsrcibe = Auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubsrcibe
    }, [])

    const value ={
        currentUser,
        Login,
        Signup,
        Logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )


}