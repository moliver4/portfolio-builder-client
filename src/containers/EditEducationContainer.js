import React, { Component } from 'react'
import EditEducationForm from '../components/EditEducationForm.js'
import EditEducationCard from '../components/EditEducationCard.js'
//inport EducationCards
//import Educationform

export default class EditEducationContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                editing: false,
                id: 0,
                institution: "",
                major: "",
                grad_date: "",
                external_link: "",
                order: 0
        }
        // console.log(this.props.education)
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        if(this.state.id === ""){
            this.setState({editing: false}, () => {
                let objToSend = {
                    user_id: this.props.userInfo.id,
                    id: this.state.id,
                    institution: this.state.institution,
                    major: this.state.major,
                    grad_date: this.state.grad_date,
                    external_link: this.state.external_link,
                    order: this.state.order
            }
            delete objToSend['id']
            console.log('%c This is the object being sent to add', 'color: #deff8b;', objToSend)
                this.props.addObj('education', objToSend )
            })
        } else {
            this.setState({editing: false}, () => {
                let objToSend = {
                    user_id: this.props.userInfo.id,
                    id: this.state.id,
                    institution: this.state.institution,
                    major: this.state.major,
                    grad_date: this.state.grad_date,
                    external_link: this.state.external_link,
                    order: this.state.order
            }
            console.log('%c This is the object being sent to edit', 'color: #deff8b;', objToSend)
                this.props.editObj('education', objToSend )
            })
        }
    }

    checkDisplayForm(){
        if(this.state.editing === true){
            return <EditEducationForm handleFormSubmit={this.handleSubmit} handleFormChange={this.handleFormChange} cardDetails={this.state}></EditEducationForm>
        } else {
            return ""
        }
    }

    renderCards(){
        let educations = this.props.education
        return educations.map((item,index) => {
            return <EditEducationCard deleteObj={this.props.deleteObj} changeEditing={this.changeEditing} key={index} cardDetails={item}> </EditEducationCard>
        })
    }

    handleFormChange = (e) => {
        console.log(e.target.name)
       
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    changeEditing = (e, cardDetails) => {
        this.setState({
            editing: true,
            id: cardDetails.id,
            institution: cardDetails.institution,
            major: cardDetails.major,
            grad_date: cardDetails.grad_date,
            external_link: cardDetails.external_link,
            order: cardDetails.order
    })
    }

    newForm(e){
        e.preventDefault()
        this.setState({
            editing: true,
            id: "",
            institution: "",
            major: "",
            grad_date: "",
            external_link: "",
            order: 0
    })
    }


    render() {
        return (
                <div className="card border-light">
                    <div className="card-header bg-transparent">Education</div>
                    <div className="card-body">
                        <button className="btn btn-primary" onClick={e => this.newForm(e)}>Add</button>
                        {this.checkDisplayForm()}
                        {this.renderCards()}
                    </div>
                </div>
        )
    }
}
