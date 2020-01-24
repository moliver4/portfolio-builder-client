import React, { Component } from 'react'
import EditProjectForm from '../components/EditProjectForm.js'
import EditProjectsCard from '../components/EditProjectsCard.js'



export default class EditProjectsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                editing: false,
                id: 0,
                project_url: "",
                name: "",
                summary: "",
                img_url: "",
                languages_used: "",
                order: 0
        }
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        if(this.state.id === ""){
            this.setState({editing: false}, () => {
                let objToSend = {
                    user_id: this.props.userInfo.id,
                    id: this.state.id,
                    project_url: this.state.project_url,
                    name: this.state.name,
                    summary: this.state.summary,
                    img_url: this.state.img_url,
                    languages_used: this.state.languages_used,
                    order: this.state.order
            }
            delete objToSend['id']
            console.log('%c This is the object being sent to add', 'color: #deff8b;', objToSend)
                this.props.addObj('project', objToSend )
            })
        } else {
            this.setState({editing: false}, () => {
                let objToSend = {
                    user_id: this.props.userInfo.id,
                    id: this.state.id,
                    project_url: this.state.project_url,
                    name: this.state.name,
                    summary: this.state.summary,
                    img_url: this.state.img_url,
                    languages_used: this.state.languages_used,
                    order: this.state.order
            }
            console.log('%c This is the object being sent to edit', 'color: #deff8b;', objToSend)
                this.props.editObj('project', objToSend )
            })
        }
    }

    checkDisplayForm(){
        if(this.state.editing === true){
            return <EditProjectForm cancelForm={this.cancelForm} handleFormSubmit={this.handleSubmit} handleFormChange={this.handleFormChange} cardDetails={this.state}></EditProjectForm>
        } else {
            return ""
        }
    }

    renderCards(){
        let projectCards = this.props.projects
        return projectCards.map((item,index) => {
            return <EditProjectsCard deleteObj={this.props.deleteObj} changeEditing={this.changeEditing} key={index} cardDetails={item}> </EditProjectsCard>
        })
    }

    handleFormChange = (e) => {
        // console.log(e.target.name)
       
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate(){
        // console.log(this.state)
    }

    cancelForm = () => {
        this.setState({editing: false})
    }

    changeEditing = (e, cardDetails) => {
        this.setState({
                    editing: true,
                    id: cardDetails.id,
                    project_url: cardDetails.project_url,
                    name: cardDetails.name,
                    summary: cardDetails.summary,
                    img_url: cardDetails.img_url,
                    languages_used: cardDetails.languages_used,
                    order: cardDetails.order
        })
    }

    newForm(e){
        e.preventDefault()
        this.setState({
            editing: true,
            id: "",
            project_url: "",
            name: "",
            summary: "",
            img_url: "",
            languages_used: "",
            order: ""
    })
    }


    render() {
        return (
            <div className="card border-light">
                    <div className="card-header bg-transparent">Projects</div>
                    <div className="card-body">
                        <button className="btn btn-primary" onClick={e => this.newForm(e)}>Add</button>
                        {this.checkDisplayForm()}
                        {this.renderCards()}
                </div>
            </div>
        )
    }
}


