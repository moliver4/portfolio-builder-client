import React, { Component } from 'react'


// add form here that will take in user email & submit button
// submit button will trigger a function in App.js that will retrieve all user details
class LoginScreen extends Component {


    render() {
        return (
            <div>
                <form id="login-form" onSubmit={this.props.LoginUser}>
                    <h4>Login or SignUp to Get Started</h4>
                    <div>
                        <label htmlFor='email_address'>Email: </label> 
                        <input 
                            type='text' 
                            value={this.props.user.email_address} 
                            name='email_address' 
                            defaultValue='Email Address'
                            onChange={this.props.onLoginChange}
                        /> 
                    </div>

                    <input type='submit' value='Login'/>
                        
                </form>
                
            </div>
        )
    }
}

export default LoginScreen

