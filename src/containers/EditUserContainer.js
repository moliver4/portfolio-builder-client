import React, { Component } from 'react'
import UserForm from '../components/EditUserForm'


export default class EditUserContainer extends Component {

    state = {
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


    loadState = () => {
        this.setState({
            userForm: {
                id: this.props.user.id,
                name: this.props.user.name,
                email_address: this.props.user.email_address,
                avatar_url: this.props.user.avatar_url,
                background_url: this.props.user.background_url,
                template: this.props.user.template
            }
        })
    }

    componentDidMount(){
        this.loadState()
    }

    handleStateChange = (event) => {

        let name = event.target.name
        let value = event.target.value

        this.setState(prevState => ({
            userForm: {...prevState.userForm, [name]: value}
        }))
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('submitting form...', event)
        // need object to pass up.
        // this.props.editUserInfo('user', obj)
    }

    render() {
        const { id, name, email_address, avatar_url, background_url, template } = this.props.user
        return (
            <div>
                <h1>User Container</h1>
                {/* user avatar: <img src={avatar_url} width='25%' alt='Profile'></img><br />
                User Id: {id}<br />
                Username: {name}<br />
                Email: {email_address}<br />
                Portfolio template: {template}<br />
                background image: <img src={background_url} width='90%' alt='background'></img> */}
                {console.log("here's what's passed into User container", this.props)}
                <UserForm user={this.state.userForm} handleStateChange={this.handleStateChange} handleFormSubmit={this.handleFormSubmit} editUserInfo={this.props.editUserInfo}/>
            </div>
        )
    }
}
