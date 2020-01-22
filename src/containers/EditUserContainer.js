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
        const { id, name, email_address, avatar_url, background_url, template } = this.props.user
        return (
            <div>
                <h1>User Container</h1>
                user avatar: <img src={avatar_url} width='25%'></img><br />
                User Id: {id}<br />
                Username: {name}<br />
                Email: {email_address}<br />
                Portfolio template: {template}<br />
                background image: <img src={background_url} width='100%'></img>
                {console.log("here's what's passed into User container", this.props)}
            </div>
        )
    }
}
