import React, { Component } from 'react'
import EditProjectsContainer from '../containers/EditProjectsContainer.js'
import EditEducationContainer from '../containers/EditEducationContainer.js'
import EditSkillsContainer from '../containers/EditSkillsContainer.js'
import LoginHOC from '../HOCs/LoginHOC'
import User from '../containers/EditUserContainer'
import EditExperienceContainer from '../containers/EditExperienceContainer'
import EditAccoladesContainer from '../containers/EditAccoladesContainer'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

class EditScreen extends Component {

    portfolioLink = `/portfolio/${this.props.user.id}`

    render() {
        console.log("these are the props in Edit Screen", this.props)
        return (
            <div>
                <NavBar  user={this.props.user} logout={this.props.logout}/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                    <User user={this.props.user} editUserInfo={this.props.editObj}/>
                    <EditProjectsContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} projects={this.props.projects} ></EditProjectsContainer>
                    <EditEducationContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} education={this.props.education} ></EditEducationContainer>
                    <EditSkillsContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} skills={this.props.skills} ></EditSkillsContainer>
                    <EditExperienceContainer experiences={this.props.experiences} user={this.props.user} addObj={this.props.addObj} editObj={this.props.editObj} deleteObj={this.props.deleteObj} />
                    <EditAccoladesContainer accolades={this.props.accolades} userInfo={this.props.user} addObj={this.props.addObj} editObj={this.props.editObj} deleteObj={this.props.deleteObj} />
                    <Link to={this.portfolioLink}>
                        <button class="btn btn-danger btn-block" style={styles.button}>I'm Done! See My Portfolio!</button>
                    </Link>
                        </div>
                    </div>
                
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

const styles={
    button: {

        paddingLeft: 50,
        paddingRight: 50
    }
}

export default LoginHOC(EditScreen)
