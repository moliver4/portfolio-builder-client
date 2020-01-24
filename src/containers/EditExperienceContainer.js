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
                order: 0
            }
        }
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
            return <EditExperienceCard handleDelete={this.handleDelete} key={index} experience={experience} newExperienceClick={this.newExperienceClick} editExistingExperience={this.editExistingExperience} submitNewInfo={this.submitNewInfo} deleteObj={this.props.deleteObj} />
        }) 
    }

    // function that will be called when user clicks existing skill's edit button 
    // update state with experience and toggle editing to "true" in order to trigger prepopulated form to render
    editExistingExperience = (experience) => {
        this.setState({
            editing: true,
            newExperience: experience
        }, () => console.log(this.state.newExperience))
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
                user_id: this.props.user.id
            }
        })
    }

    // send updated info to App.js to be persisted in database
    submitNewInfo = (event) => {
        event.preventDefault()
        let obj = this.state.newExperience
        console.log('object on submit', obj)
        this.state.newExperience.id ? this.props.editObj('experience', obj) : this.props.addObj('experience', obj)
        this.setState(prevState => ({
            editing: !prevState.editing
        }))
    }

    render() {
        let isEditing = this.state.editing

        return (
            <div className="card border-light">
            <div className="card-header bg-transparent">Experience</div>
            <div className="card-body">
                <button className="btn btn-primary" onClick={this.newExperienceClick}>Add</button>
                {
                        isEditing ? <EditExperienceForm experience={this.state.newExperience} onEditForm={this.onEditForm} handleChange={this.handleChange} submitNewInfo={this.submitNewInfo} /> : null 
                    }
                {this.mapThroughExperience()}
            </div>
            </div>

        )
    }
}

export default EditExperienceContainer;