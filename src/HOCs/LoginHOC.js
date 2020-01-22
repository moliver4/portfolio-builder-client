import React from 'react'
import { Redirect } from 'react-router-dom'

const LoginHOC = WrappedComponent => {
    return class LoginHOC extends React.Component {

        authorized = () => {
            return this.props.loggedIn;
        }

        render() {
            return this.authorized() ? (
              <WrappedComponent {...this.props} />
            ) : (
              <Redirect to="/" />
            );
        }
    }
}

export default LoginHOC