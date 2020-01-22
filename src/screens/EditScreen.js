import React, { Component } from 'react'
import EditProjectsContainer from './src/containers/EditProjectsContainer.js'
import EditEducationContainer from './src/containers/EditEducationContainer.js'

export default class EditScreen extends Component {

// render containers for each field to be edited 
    render() {
        return (
            <div>
                <EditProjectsContainer></EditProjectsContainer>
                <EditEducationContainer></EditEducationContainer>
            </div>
        )
    }
}

