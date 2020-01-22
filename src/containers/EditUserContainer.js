import React, { Component } from 'react'


export default class EditUserContainer extends Component {

    state = {
        isEditing: false,
        userForm: {
            id: null,
            name: '',
            email_address: '',
            avatar_url: '',
            background_url: '',
            template: 'default'
        }
    }

    //User is form only
    //EditUserForm is in components folder if you want to render the component separately
    //on submit, callback to App to save user info

    render() {
        return (
            <div>
                <h1>User Container</h1>
                {console.log("here's what's passed into User container", this.props)}
            </div>
        )
    }
}
