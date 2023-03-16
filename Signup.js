import {useRef, useState} from "react";
import { Button, Card, Alert, Form, NavLink} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import { useHistory} from "react-router-dom"

export default function Signup()
{
    const emailRef = useRef()
    const passwordRef =  useRef()
    const passwordConfirmRef = useRef()
    const { Signup} = useAuth()
    const [error, setError] = useState("")
    const [loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
         
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
            await Signup (emailRef.current.vale, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("FAiled to create an account ")
        }
        setLoading(false)
    }
    return (
        <>
        <Card>
            <Card.Body>
                <h2 classname="text-center mb-4">Log in</h2>
                {error && <Alert varient ="dnager">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef}/>
                    </Form.Group>
                    <Form.Group id ="password">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" ref={passwordRef}/>
                    </Form.Group>
                    <Form.Group id ="pasword-confirm">
                        <Form.Label>password confirmation </Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef}/>
                    </Form.Group>
                    <Button disbaled = {loading} classname="w-100" type="submit">
                        Log in
                    </Button>
                </form>
                <div classname ="w-100 text-center mt=2">
                    <NavLink to="/forgot-password">Forgot Password</NavLink>
                </div>
            </Card.Body>
        </Card>
        <div classname="w-100 text-center mt-2">
            Need an Account? <NavLink to="/Signup">Sign up</NavLink>
        </div>
        </>
    )

}
