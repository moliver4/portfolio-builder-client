import React, { Component } from 'react'
import EditProjectForm from './src/components/EditProjectForm.js'
import EditProjectsCard from './src/components/EditProjectsCard.js'



export default class EditProjectsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editing: false,
            cards: [],
            cardForm : {
                project_url: "",
                name: "",
                summary: "",
                img_url: "",
                languages_used: "",
                order: null
            }
        }
        this.getThoseCards()
    }

    getThoseCards(){
        fetch('http://example.com/movies.json')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    cards: myJson
                })
            });
    }

    handleFormSubmit = () => {
        newEditing = !this.state.editing
        this.setState({
            editing : newEditing
        })
        // at this point the program will make a fetch request to the backend, persisting the data from the form
        fetch('https://example.com/profile', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.cardForm),
            }).then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            //pessimistically fetch the cards
            this.getThoseCards()  
    }

    checkDisplayForm(){
        if(this.state.editing === true){
            return <EditProjectForm handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} cardDetails={this.state.cardForm}></EditProjectForm>
        } else {
            return ""
        }
    }

    renderEditProjectCards(){
        return this.state.cards.map((item,index) => {
            return <EditProjectsCard changeEditing={this.changeEditing} key={index} cardDetails={item}> </EditProjectsCard>
        })
    }

    handleFormChange = (e) => {
        let newOb = {
            cardForm: {
                [e.target.name]: e.target.project-url.value,
                [e.target.name]: e.target.name.value,
                [e.target.name]: e.target.summary.value,
                [e.target.name]: e.target.img_url.value,
                [e.target.name]: e.target.languages_used.value,
                [e.target.name]: e.target.order.value
            }
        }
        this.setState(newOb)
    }

    changeEditing = (e, cardDetails) => {
        this.setState(prevState => {
            newEditing = !prevState.editing
            return {
                editing: newEditing,
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
                {this.checkDisplayForm()}
                {this.renderEditCards()}
            </div>
        )
    }
}


