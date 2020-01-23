import React, { Component } from 'react'

//accepts props from parent of 1 skill obj, renders info for each attribute
//can be functional component if you want


export default class EditSkillCard extends Component {

    render() {
        return (
            <div>
            <p><strong>Name</strong> {this.props.cardDetails.name}</p> 
            <p><strong>Category</strong> {this.props.cardDetails.category}</p> 
            <p><strong>External Link</strong> {this.props.cardDetails.link_url}</p> 
            <p><strong>Proficiency</strong> {this.props.cardDetails.proficiency}</p> 
            <p><strong>Display Order</strong> {this.props.cardDetails.order}</p> 
            <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} type="button">Edit</button>
            <button onClick={e => this.props.deleteObj('skill', this.props.cardDetails.id)} type="button">Delete</button>
            <br/>            
            <br/>            
        </div>
        )
    }
}
