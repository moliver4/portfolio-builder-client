import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditEducationCard extends Component {

    render() {
        return (
            <div>
            institution: {this.props.cardDetails.institution} <br></br>
            major: {this.props.cardDetails.major} <br></br>
            grad_date: {this.props.cardDetails.grad_date} <br></br>
            external_link: {this.props.cardDetails.external_link} <br></br>
            order: {this.props.cardDetails.order} <br></br>
            <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} type="button">edit</button>
            <button onClick={e => this.props.deleteObj('education', this.props.cardDetails.id)} type="button">delete</button>
        </div>
        )
    }
}
