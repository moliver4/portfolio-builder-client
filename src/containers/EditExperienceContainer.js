import React, { Component } from 'react'
import EditExperienceCard from '../components/EditExperienceCard'
import EditExperienceForm from '../components/EditExperienceForm'

class EditExperienceContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editing: false,
            newExperience: {}
        }
    }

    // App.js props --> passed down by EditScreen --> "experiences"
    mapThroughExperience = () => {
        return this.props.experiences.map((experience, index) => {
            return <EditExperienceCard key={index} experience={experience} newExperienceClick={this.newExperienceClick} editExistingExperience={this.editExistingExperience} />
        }) 
    }

    // function that will be called when user clicks existing skill's edit button 
    // update state with experience and toggle editing to "true" in order to trigger prepopulated form to render
    editExistingExperience = (experience) => {
        this.setState({
            editing: true,
            newExperience: experience
        })
    }

    // function that will be called when user clicks on button that will add a new skill
    // setting state to empty string as it shouldn't populate with any existing data in EditExperienceForm
    newExperienceClick = () => {
        this.setState({
            editing: true,
            newExperience: ""
        })
    }

    // takes in new values from user 
    onEditForm = newSkill => {
        console.log(newSkill)
        this.setState(prevState => {
            return {
                newExperience: {...prevState.newExperience, newSkill, user_id: this.props.user.id}
            }
        })
        console.log('state after user changes', this.state.newExperience)
    }

    // send updated info to App.js to be persisted in database
    submitNewInfo = () => {
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