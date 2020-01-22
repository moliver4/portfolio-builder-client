import React, { Component } from 'react'
import experienceCards from '../components/EditExperienceCard'
import experienceForm from '../components/EditExperienceForm'
import EditExperienceForm from '../components/EditExperienceForm'

//render form conditionally

class EditExperienceContainer extends Component {
    constructor(props) {
        super(props)
    
        //newexperience
        this.state = {
            editing: false,
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
    // update state with experience and toggle editing to "true" in order to trigger prepopulated form to render

    editExistingExperience = (experience) => {
        this.setState({
            editing: true,
            newExperience: experience
        })
    }

    // function that will be called when user clicks on button that will add a new skill


    // prepopulate form with current information (this.state.newExperience)

    render() {
        let isEditing = this.state.editing

        return (
            <div>
                <div>
                    <h3>Experience</h3>
                    {this.mapThroughExperience()}
                </div>
                <div>
                    {
                        isEditing ? <EditExperienceForm experience={this.state.newExperience} /> : null 
                    }
                </div>
            </div>
        )
    }
}

export default EditExperienceContainer;