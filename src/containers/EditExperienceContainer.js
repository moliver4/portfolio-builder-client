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
        })
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
                user_id: this.props.user.id
            }
        })
    }

    // send updated info to App.js to be persisted in database
    submitNewInfo = (event) => {
        event.preventDefault()
        let obj = this.state.newExperience
   
        this.state.newExperience.id ? this.props.editObj('experience', obj) : this.props.addObj('experience', obj)
        this.setState(prevState => ({
            editing: !prevState.editing
        }))
    }

    cancelForm = (e) => {
        e.preventDefault()
        this.setState({editing: false})
    }

    render() {
        let isEditing = this.state.editing

        return (
            <div className="card border-light" style={styles.card}>
            <div className="card-header text-center" style={styles.about}>Experience</div>
            <div className="card-body" style={styles.body}>
                <button className="btn btn-sm"  style={styles.addButton} onClick={this.newExperienceClick}>Add New Experience</button>
                {
                        isEditing ? <EditExperienceForm cancelForm={this.cancelForm}experience={this.state.newExperience} onEditForm={this.onEditForm} handleChange={this.handleChange} submitNewInfo={this.submitNewInfo} /> : null 
                    }
                {this.mapThroughExperience()}
            </div>
            </div>

        )
    }
}

const styles = {
    addButton: {
        color: '#ffffff',
        backgroundColor: '#12cad6',
        marginBottom: 20,
        marginLeft: '30%',
        marginRight: '30%'
    },
    card: {
        marginTop: 20,
        marginBottom: 20
    },
    body: {
        display: 'flex',
        flexDirection: 'column'
    },
    about: {
        color: '#0fabbc',
        backgroundColor: '#e4f9ff'
    }
}
export default EditExperienceContainer;