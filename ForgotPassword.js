import {useRef, useState} from "react"
import {card, Button, Alert, form} from "react-router-dom"
import {useAuth} from "../context/AuthContext"
import {link} from "react-router-dom"


export default function ForgotPassword () 
{
    const emailRef = useRef()
    const {resetPassword} = useAuth ()
    const {error, setError} = useState("")
    const {message, setMessage} = useState("")
    const {loading, setLoading} = useState(false)

    async function handleSubmit (e)
    {
        e.preventionDefault()
        
        try{
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset")
        }
        setLoading(false)
    }
    return (
        <>
        <card>
            <card.Body>
                <h2 className = "text-center mb4-4">Password reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <form onsubmit ={handleSubmit}>
                    <form.Group id="email">
                        <form.Control type="email" ref={emailRef} required/>
                    </form.Group>
                    <Button disabled ={loading} className="w-100" type ="submit">
                        Reset Password</Button>
                </form>
                <div clasName="w-100 text-center mt=3">
                    Need an Account? <link to="/Sign up"></link> 
                    </div>
            </card.Body>
        </card>
        </>
    )
     

} 