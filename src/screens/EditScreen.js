import React, { Component } from 'react'
import LoginHOC from '../HOCs/LoginHOC'
import EditExperienceContainer from '../containers/EditExperienceContainer'

class EditScreen extends Component {

// render containers for each field to be edited 

// 2 buttons at bottom!!! 1 will be button to SAVE the data(although we are already saving it) and other must be a 'Link' to '/portoflio/:id'
    render() {
        return (
            <div>
                <EditExperienceContainer experiences={this.props.experiences} user={this.props.user} />
            </div>
        )
    }
}


export default LoginHOC(EditScreen)
