import React, { Component } from 'react'
import EditExperienceCard from '../components/EditExperienceCard'
import EditExperienceForm from '../components/EditExperienceForm'

class EditExperienceContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editing: false,
            newExperience: {
                company: '',
                role: '',
                summary: '',
                start_date: '',
                end_date: ''
            }
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        let key = event.target.name
        let value  =event.target.value
        // return this.onEditForm(newObj)
        this.setState(prevState => {
            return {
                newExperience: {...prevState.newExperience, [key]:value}
            }
        }, () => console.log('state after user changes', this.state.newExperience))
    }

    // App.js props --> passed down by EditScreen --> "experiences"
    mapThroughExperience = () => {
        return this.props.experiences.map((experience, index) => {
            return <EditExperienceCard key={index} experience={experience} newExperienceClick={this.newExperienceClick} editExistingExperience={this.editExistingExperience} submitNewInfo={this.submitNewInfo} />
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
    // onEditForm = newSkill => {
    //     console.log(newSkill)
    //     this.setState(prevState => {
    //         return {
    //             newExperience: {...prevState.newExperience, newSkill}
    //         }
    //     }, () => console.log('state after user changes', this.state.newExperience))
        
    // }

    // send updated info to App.js to be persisted in database
    submitNewInfo = () => {
        console.log('submit button clicked')
        // this.props.addObj(newExperience)
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
                        isEditing ? <EditExperienceForm experience={this.state.newExperience} onEditForm={this.onEditForm} handleChange={this.handleChange} /> : null 
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