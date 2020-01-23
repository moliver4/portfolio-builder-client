import React from 'react'
import LoginHOC from '../HOCs/LoginHOC'
import logo from '../images/logo1.png'

// add form here that will take in user email & submit button
// submit button will trigger a function in App.js that will retrieve all user details
const styles = {
    backgroundColor: '#hgfhg'
}
const LoginScreen = ({ email, submitLogin, handleInputChange}) => {

    return (
        <div className="container text-center" >

            <div className='row py-5'>

                <div className='col' width='25'>

                    <img className='py-5' width="150px" src={logo} ></img>
                    <h4>Login or SignUp to Get Started</h4>
                    <form className='py-3' id="login-form" onSubmit={submitLogin}>
                                <label htmlFor='email_address'> </label> 
                                <input placeholder="Enter email"
                                    type='text' 
                                    value={email} 
                                    name='email_address'
                                    onChange={(e) => handleInputChange(e)}
                                /> <br></br>
                        <input type='submit' value='Login' />
                    </form>
                    <h2>Welcome to the MVP porfolio builder!</h2>
                    <h4>Where you can create your own portfolio and share it with the world.</h4>
                    
                </div>

            </div>
            
        </div>
    )
    
}

export default LoginHOC(LoginScreen)

