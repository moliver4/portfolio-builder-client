import React, { Component } from 'react'
import experienceCards from '../components/EditExperienceCard'
import experienceForm from '../components/EditExperienceForm'

//render form conditionally

export default class EditExperienceContainer extends Component {
    constructor(props) {
        super(props)
    
        //editing
        //newexperience
        this.state = {
            editing: false,
            experience: [],
            newExperience: []
        }
    }

    // change name of prop according to name given in App.js
    mapThroughExperience = () => {
        return this.props.userExperience.map((experience, index) => {
            return <EditExperienceCard key={index} experience={experience} />
        }) 
    }

    // function that will be called when user clicks on edit button on existing skill 
    // update state with experience
    // prepopulate with current information
    editExistingExperience = (experience) => {
        this.setState({
            
        })
    }

    // function that will be called when user clicks on button that will add a new skill

    render() {
        return (
            <div>
                <h3>Experience</h3>
                {this.mapThroughExperience()}
            </div>
        )
    }
}
