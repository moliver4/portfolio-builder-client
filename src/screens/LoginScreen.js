import React from 'react'
import LoginHOC from '../HOCs/LoginHOC'
import logo from '../images/logo1.png'

// add form here that will take in user email & submit button
// submit button will trigger a function in App.js that will retrieve all user details
const LoginScreen = ({ email, submitLogin, handleInputChange}) => {

    return (
        <div class="container">
            <img src={logo} ></img>

            <div class=".flex-row">
                <h4>Login or SignUp to Get Started</h4>
            </div>

            <div class=".flex-row">
                <form id="login-form" onSubmit={submitLogin}>
                            <label htmlFor='email_address'> </label> 
                            <input placeholder="Enter email"
                                type='text' 
                                value={email} 
                                name='email_address'
                                onChange={(e) => handleInputChange(e)}
                            /> <br></br>
                    <input type='submit' value='Login' />
                </form>
            </div>
            
        </div>
    )
    
}

export default LoginHOC(LoginScreen)

