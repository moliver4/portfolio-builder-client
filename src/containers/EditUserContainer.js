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

    // loads the user object passed down into the state to be used in the EditUserForm
    componentDidMount(){
        this.loadState()
    }

    // this replaces individual keys within state.userForm as they are being edited in the controlled form
    handleStateChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        this.setState(prevState => ({
            userForm: {...prevState.userForm, [name]: value}
        }))
    }

    // upon EditUserForm Submission, this function passes the userForm object from state up to App to update the User object on the front and backend.
    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('submitting form...', event, 'and here is the userForm from state.', this.state.userForm)
        // need object to pass up.
        this.props.editUserInfo('user', this.state.userForm)
    }

    render() {
        // const { id, name, email_address, avatar_url, background_url, template } = this.props.user
        return (
            <div className="card border-light" style={styles.card}>
                <div className="card-header text-center" style={styles.about}>About You</div>
                <div className="card-body">
                {/* user avatar: <img src={avatar_url} width='25%' alt='Profile'></img><br />
                User Id: {id}<br />
                Username: {name}<br />
                Email: {email_address}<br />
                Portfolio template: {template}<br />
                background image: <img src={background_url} width='90%' alt='background'></img> */}
                {console.log("here's what's passed into User container", this.props)}
                    <UserForm user={this.state.userForm} handleStateChange={this.handleStateChange} handleFormSubmit={this.handleFormSubmit} />
                </div>
            </div>
        )
    }
}

const styles = {
    card: {
        marginTop: 20,
        marginBottom: 20
    },
    about: {
        backgroundColor: '#e4f9ff'
    }
}
