import React, { useState, Fragment } from 'react'
import LoginHOC from '../HOCs/LoginHOC'
import logo from '../images/logo2.png'
import Footer from '../components/Footer'
import Adapter from '../services/Adapter'

const LoginScreen = ({ newUser, toggleSignIn, loggedIn, updateState }) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        Adapter.login(email, password)
        // .then(console.log)
        .then(data => {
            localStorage.setItem('jwt', data.jwt)
            updateState(data.user)
            setEmail('')
            setPassword('')
        })
        .catch(error => console.log('error message login', error))
    }

    const handleSignup = (e) => {
        e.preventDefault()
        Adapter.signup(email, password)
        // .then(console.log)
        .then(data => {
            localStorage.setItem('jwt', data.jwt)
            updateState(data.user)
            setEmail('')
            setPassword('')
        })
        .catch(error => console.log('error message login', error))
    }

    const showForm = () => {
        if (!newUser) {
            return (
                <>
                <h4>Login or SignUp to Get Started</h4>
                <form className='py-3' id="login-form" onSubmit={handleLogin}>
                            <div className='form-group text-center' >
                                    <label htmlFor='email_address'> </label> 
                                    <input 
                                        style={styles.email}
                                        className='form text-center'
                                        placeholder="Enter email"
                                        type='text' 
                                        value={email} 
                                        name='email_address'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">Please enter a username or email for this portfolio.</small>
                                    <label htmlFor='email_address'> </label> 
                                    <input 
                                        style={styles.email}
                                        className='form text-center'
                                        placeholder="Enter password"
                                        type='password' 
                                        value={password} 
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    
                            </div>
                            <input onClick={(e) => handleLogin(e)} type='button' style={styles.logIn} className="btn btn-outline-info" value='Login' />
                            
                        </form>
                        <button style={styles.logIn} className="btn btn-outline-info" onClick={toggleSignIn}>Don't have an account? Sign Up Here</button>
                        
                </>
            )
        } else {
             return (
             <>
             <h4>SignUp to Get Started</h4>
                <form className='py-3' id="login-form" onSubmit={handleLogin}>
                            <div className='form-group text-center' >
                                    <label htmlFor='email_address'> </label> 
                                    <input 
                                        style={styles.email}
                                        className='form text-center'
                                        placeholder="Enter email"
                                        type='text' 
                                        value={email} 
                                        name='email_address'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">Please enter a username or email for this portfolio.</small>
                                    <label htmlFor='email_address'> </label> 
                                    <input 
                                        style={styles.email}
                                        className='form text-center'
                                        placeholder="Enter password"
                                        type='password' 
                                        value={password} 
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    
                            </div>
                            <input onClick={(e) => handleSignup(e)} type='button' style={styles.logIn} className="btn btn-outline-info" value='SignUp' />
                            
                        </form>
                        <button style={styles.logIn} className="btn btn-outline-info" onClick={toggleSignIn}>Have an account? Log In Here</button>
                        
                </>
             )
        }
    }

    return (
        <div>
            <div className="container text-center" >

                <div className='row py-5'>

                    <div className='col' width='25'>

                        <img className='py-5' width="150px" src={logo} ></img>
                        {showForm()}

                        <div className="p-3 mb-2 text-white" style={styles.textContainer}>
                            <h2>Welcome to MVP Portfolio Builder Lite!</h2>
                            <h4>Where you can create your own portfolio and share it with the world.</h4>
                        </div>

                        <div style={styles.video}>
                            <iframe src='https://www.youtube.com/embed/LLfgOdKEudE'
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
                <Footer />
        </div>

    )
    
}

const styles = {
    logIn: {marginTop: 10, marginBottom: 10, marginLeft: 20},
    email: {
        width: '50%',
        height: 40,
        borderRadius: 5
    },
    video: {
        paddingTop: 20
    },
    textContainer: {
        backgroundColor: '#0fabbc'
    }
} 


export default LoginHOC(LoginScreen)

