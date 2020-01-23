import React from 'react'
import LoginHOC from '../HOCs/LoginHOC'
import logo from '../images/logo2.png'

// add form here that will take in user email & submit button
// submit button will trigger a function in App.js that will retrieve all user details

const LoginScreen = ({ email, submitLogin, handleInputChange}) => {

    return (
        <div className="container text-center" >

            <div className='row py-5'>

                <div className='col' width='25'>

                    <img className='py-5' width="150px" src={logo} ></img>
                    <h4>Login or SignUp to Get Started</h4>
                    <form className='py-3' id="login-form" onSubmit={submitLogin}>
                        <div className='form-group' >
                                <label htmlFor='email_address'> </label> 
                                <input 
                                    className='form-control'
                                    placeholder="Enter email"
                                    type='text' 
                                    value={email} 
                                    name='email_address'
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <input onClick={(e) => submitLogin(e)} type='button' style={styles.logIn} className="btn btn-outline-info" value='Login' />
                    </form>

                    <div class="p-3 mb-2 bg-info text-white">
                        <h2>Welcome to MVP Portfolio Builder Lite!</h2>
                        <h4>Where you can create your own portfolio and share it with the world.</h4>
                    </div>

                    <div>
                        <iframe src='https://www.youtube.com/embed/EcEMX-63PKY'
                        frameBorder='0'
                        allow='autoplay;'
                        allowFullScreen
                        title='video'
                        width="723" height="542"
                        />
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
    
}

const styles = {
    logIn: {marginTop: 10}
}


export default LoginHOC(LoginScreen)

