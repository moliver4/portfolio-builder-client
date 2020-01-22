import React, { Component } from 'react'
import EditProjectForm from '../components/EditProjectForm.js'
import EditProjectsCard from '../components/EditProjectsCard.js'



export default class EditProjectsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editing: false,
            cardForm : {
                id: null,
                project_url: "",
                name: "",
                summary: "",
                img_url: "",
                languages_used: "",
                order: null
            }
        }
        // this.getThoseCards()
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
        console.log(id)
        console.log('form submitted')
    }

    checkDisplayForm(){
        if(this.state.editing === true){
            return <EditProjectForm handleFormSubmit={this.handleSubmit} handleFormChange={this.handleFormChange} cardDetails={this.state.cardForm}></EditProjectForm>
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
        let newOb = {
            cardForm: {
                [e.target.name]: e.target.value,
            }
        }
        this.setState(newOb)
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    changeEditing = (e, cardDetails) => {
        this.setState(prevState => {
            return {
                editing: true,
                cardForm: {
                    project_url: cardDetails.project_url,
                    name: cardDetails.name,
                    summary: cardDetails.summary,
                    img_url: cardDetails.img_url,
                    languages_used: cardDetails.languages_used,
                    order: cardDetails.order
                }
            }
        })
    }

//map through render cards
//render form conditionally
//dont forget keys for card components! 


    render() {
        return (
            <div>
                <h1>Projects Container</h1>
                {this.checkDisplayForm()}
                {this.renderEditProjectCards()}
            </div>
        )
    }
}


