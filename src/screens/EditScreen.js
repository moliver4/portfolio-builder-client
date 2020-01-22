import React, { Component } from 'react'
import LoginHOC from '../HOCs/LoginHOC'
import User from '../containers/EditUserContainer'

class EditScreen extends Component {

// render containers for each field to be edited 

// 2 buttons at bottom!!! 1 will be button to SAVE the data(although we are already saving it) and other must be a 'Link' to '/portoflio/:id'
    render() {
        {console.log("these are the props in Edit Screen", this.props)}
        return (
            <div>
                <User user={this.props.user} addUserInfo={this.props.addUserInfo}/>
            </div>
        )
    }
}


export default LoginHOC(EditScreen)
