import React, { Component } from 'react'
import EditProjectsContainer from '../containers/EditProjectsContainer.js'
import EditEducationContainer from '../containers/EditEducationContainer.js'
import EditSkillsContainer from '../containers/EditSkillsContainer.js'
import LoginHOC from '../HOCs/LoginHOC'
import User from '../containers/EditUserContainer'
import EditExperienceContainer from '../containers/EditExperienceContainer'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

class EditScreen extends Component {

    portfolioLink = `/portfolio/${this.props.user.id}`

    render() {
        console.log("these are the props in Edit Screen", this.props)
        return (
            <div>
                <NavBar  user={this.props.user} logout={this.props.logout}/>
                <User user={this.props.user} editUserInfo={this.props.editObj}/>
                <EditProjectsContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} projects={this.props.projects} ></EditProjectsContainer>
                <EditEducationContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} education={this.props.education} ></EditEducationContainer>
                <EditSkillsContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} skills={this.props.skills} ></EditSkillsContainer>
                <EditExperienceContainer experiences={this.props.experiences} user={this.props.user} addObj={this.props.addObj} editObj={this.props.editObj} deleteObj={this.props.deleteObj} />
                <div>
                    <br/>
                    <Link to={this.portfolioLink}>
                        <button><h4>Build Portfolio!</h4></button>
                    </Link>
                    <br/>
                </div>
            </div>
        )
    }
}


export default LoginHOC(EditScreen)
