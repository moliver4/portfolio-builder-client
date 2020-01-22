import React, { Component } from 'react'
import EditProjectsContainer from '../containers/EditProjectsContainer.js'
import EditEducationContainer from '../containers/EditEducationContainer.js'
import LoginHOC from '../HOCs/LoginHOC'
import User from '../containers/EditUserContainer'

import EditExperienceContainer from '../containers/EditExperienceContainer'

class EditScreen extends Component {

// render containers for each field to be edited 

// 2 buttons at bottom!!! 1 will be button to SAVE the data(although we are already saving it) and other must be a 'Link' to '/portoflio/:id'
    render() {
        {console.log("these are the props in Edit Screen", this.props)}
        return (
            <div>
                <EditProjectsContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} projects={this.props.projects} ></EditProjectsContainer>
                <EditEducationContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} education={this.props.education} ></EditEducationContainer>
                {/* submit button */}
                {/* portfolio button */}
                <User user={this.props.user} addUserInfo={this.props.addUserInfo}/>
                <EditExperienceContainer experiences={this.props.experiences} user={this.props.user} addObj={this.props.addObj} />
            </div>
        )
    }
}


export default LoginHOC(EditScreen)
