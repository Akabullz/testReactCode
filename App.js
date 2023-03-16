import React from 'react'
import Signup from "./Signup"
import {AuthProvider} from "react-bootstrap"
import {browserRouter as Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"



function App() {
  return(
    <container
    classname= "d-flex align-items-center justify-content-center"
    style = {{minHeight : "100vh"}}
    >
      <div classname="w-100" style={{maxWidth :"400px"}} >
        <router>
          <AuthProvider>
            <switch> 
              <PrivateRoute exact path="/" component={Dashboard}/>
              <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
              <Route path= "/Signup" component={Signup}/>
              <Route path= "/Login" component={Login}/>
              <Route path= "/Forgot-Password" component={ForgotPassword}/>

            </switch>
          </AuthProvider>
        </router>
      </div>
    </container>
  )
}

export default App

