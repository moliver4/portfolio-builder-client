import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditEducationCard extends Component {

    render() {
        return (
            <div>
            <p><strong>Institution</strong> {this.props.cardDetails.institution}</p> 
            <p><strong>Major / Field of Study</strong> {this.props.cardDetails.major}</p> 
            <p><strong>Graduation Date</strong> {this.props.cardDetails.grad_date}</p> 
            <p><strong>External Link</strong> {this.props.cardDetails.external_link}</p> 
            <p><strong>Display Order</strong> {this.props.cardDetails.order}</p> 
            <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} type="button">Edit</button>
            <button onClick={e => this.props.deleteObj('education', this.props.cardDetails.id)} type="button">Delete</button>
            <br/>
            <br/>
        </div>
        )
    }
}
