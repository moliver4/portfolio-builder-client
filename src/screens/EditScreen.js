import React, { Component } from 'react'
import EditProjectsContainer from '../containers/EditProjectsContainer.js'
import EditEducationContainer from '../containers/EditEducationContainer.js'
import LoginHOC from '../HOCs/LoginHOC'


class EditScreen extends Component {

// render containers for each field to be edited 

// 2 buttons at bottom!!! 1 will be button to SAVE the data(although we are already saving it) and other must be a 'Link' to '/portoflio/:id'
    render() {
        return (
            <div>
                <EditProjectsContainer></EditProjectsContainer>
                <EditEducationContainer></EditEducationContainer>
            </div>
        )
    }
}


export default LoginHOC(EditScreen)
