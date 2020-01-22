import React, { Component } from 'react'
import EditExperienceCard from '../components/EditExperienceCard'
import EditExperienceForm from '../components/EditExperienceForm'

// send state to App.js in order to update the user's details 
// --> addExperience({experience, id}) --> experience needs to be a string
// state will be sent up from EditExperienceForm? 

class EditExperienceContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editing: false,
            newExperience: []
        }
    }

    // App.js props --> passed through EditScreen --> "experiences"
    mapThroughExperience = () => {
        return this.props.experiences.map((experience, index) => {
            return <EditExperienceCard key={index} experience={experience} newExperienceClick={this.newExperienceClick} editExistingExperience={this.editExistingExperience} />
        }) 
    }

    // function that will be called when user clicks existing skill's edit button 
    // update state with experience and toggle editing to "true" in order to trigger prepopulated form to render
    editExistingExperience = (experience) => {
        console.log('user existing skill on edit handler', experience)
        this.setState({
            editing: true,
            newExperience: experience
        })
        console.log('current state after user clicks on edit', this.state.newExperience)
    }

    // function that will be called when user clicks on button that will add a new skill
    // setting state to empty string as it shouldn't populate with any existing data in EditExperienceForm
    newExperienceClick = () => {
        this.setState({
            editing: true,
            newExperience: ""
        })
    }

    // takes in new values from user & sends new experience to App.js
    onEditForm = newSkill => {
        this.setState({
            newExperience: newSkill
        })
        // this.props.addExperience(this.state.experience, this.props.user.id)
    }

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
                        isEditing ? <EditExperienceForm experience={this.state.newExperience} onEditForm={this.onEditForm} /> : null 
                    }
                </div>
                <div>
                    <button onClick={this.newExperienceClick}>Add Skill</button>
                </div>
            </div>
        )
    }
}

export default EditExperienceContainer;