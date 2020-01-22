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
        // this.getThoseCards()
        // console.log(this.props.userInfo.id)
        // console.log(this.props.projects)
    }

    // getThoseCards(){
    //     fetch('http://example.com/movies.json')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((myJson) => {
    //             this.setState({
    //                 cards: myJson
    //             })
    //         });
    // }

    // handleFormSubmit = () => {
    //     let newEditing = !this.state.editing
    //     this.setState({
    //         editing : newEditing
    //     })
    //     // at this point the program will make a fetch request to the backend, persisting the data from the form
    //     // fetch('https://example.com/profile', {
    //     //     method: 'POST', // or 'PUT'
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     //     body: JSON.stringify(this.state.cardForm),
    //     //     }).then((response) => response.json())
    //     //     .then((data) => {
    //     //         console.log(data)
    //     //     })
    //         //pessimistically fetch the cards
    //         // this.getThoseCards()  
    // }

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
            return <EditProjectForm handleFormSubmit={this.handleSubmit} handleFormChange={this.handleFormChange} cardDetails={this.state}></EditProjectForm>
        } else {
            return ""
        }
    }

    renderEditProjectCards(){
        let projectCards = this.props.projects
        return projectCards.map((item,index) => {
            return <EditProjectsCard changeEditing={this.changeEditing} key={index} cardDetails={item}> </EditProjectsCard>
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
            editing : true,
            id: ""
        })
    }

//map through render cards
//render form conditionally
//dont forget keys for card components! 


    render() {
        return (
            <div>
                <h1>Projects Container</h1>
                <button onClick={e => this.newForm(e)}>add</button>
                {this.checkDisplayForm()}
                {this.renderEditProjectCards()}
            </div>
        )
    }
}


