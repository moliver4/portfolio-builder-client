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
                end_date: '',
                user_id: this.props.user_id,
                id: ''
            }
        }
    }

    handleDelete = event => {
        event.preventDefault()
        // console.log('delete button clicked')
    }

    handleChange = (event) => {
        let key = event.target.name
        let value  =event.target.value
        this.setState(prevState => {
            return {
                newExperience: {...prevState.newExperience, [key]:value} 
            }
        }, () => console.log('state after user changes', this.state.newExperience))
    }

    // App.js props --> passed down by EditScreen --> "experiences"
    mapThroughExperience = () => {
        return this.props.experiences.map((experience, index) => {
            return <EditExperienceCard handleDelete={this.handleDelete} key={index} experience={experience} newExperienceClick={this.newExperienceClick} editExistingExperience={this.editExistingExperience} submitNewInfo={this.submitNewInfo} />
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
            newExperience: {
                company: '',
                role: '',
                summary: '',
                start_date: '',
                end_date: '',
                user_id: this.props.user_id,
                id: ''
            }
        })
    }

    // send updated info to App.js to be persisted in database
    submitNewInfo = (event) => {
        event.preventDefault()
        this.state.experiences.id === '' ? this.props.addObj(this.state.newExperience) : this.props.editObj(this.state.newExperience)
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
                        isEditing ? <EditExperienceForm experience={this.state.newExperience} onEditForm={this.onEditForm} handleChange={this.handleChange} submitNewInfo={this.submitNewInfo} /> : null 
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