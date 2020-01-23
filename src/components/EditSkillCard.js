import React, { Component } from 'react'

//accepts props from parent of 1 skill obj, renders info for each attribute
//can be functional component if you want


export default class EditSkillCard extends Component {

    render() {
        return (
            <div>
            name: {this.props.cardDetails.name} <br></br>
            category: {this.props.cardDetails.category} <br></br>
            proficiency: {this.props.cardDetails.proficiency} <br></br>
            link_url: {this.props.cardDetails.link_url} <br></br>
            order: {this.props.cardDetails.order} <br></br>
            <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} type="button">edit</button>
            <button onClick={e => this.props.deleteObj('skill', this.props.cardDetails.id)} type="button">delete</button>
        </div>
        )
    }
}
