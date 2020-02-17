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
       
        this.setState({
            [e.target.name]: e.target.value
        })
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
                <div className="card border-light" style={styles.card}>
                    <div className="card-header text-center" style={styles.about}>Education</div>
                    <div className="card-body" style={styles.body}>
                        <button className="btn btn-sm" style={styles.addButton} onClick={e => this.newForm(e)}>Add New Education</button>
                        {this.checkDisplayForm()}
                        {this.renderCards()}
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