import React from 'react'


// add form here that will take in user email & submit button
// submit button will trigger a function in App.js that will retrieve all user details
const LoginScreen = ({ email, submitLogin, handleInputChange}) => {

    return (
        <div>
            <form id="login-form" onSubmit={submitLogin}>
                <h4>Login or SignUp to Get Started</h4>
                <div>
                    <label htmlFor='email_address'>Email: </label> 
                    <input 
                        type='text' 
                        value={email} 
                        name='email_address'
                        onChange={(e) => handleInputChange(e)}
                    /> 
                </div>

                <input type='submit' value='Login' />
                    
            </form>
            
        </div>
    )
    
}

export default LoginScreen

