import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditProjectsCard extends Component {

    render() {
        return (
            <div>
                <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} type="button">edit</button>
                {/* project_url: {this.props.cardDetails.project_url}
                name: {this.props.cardDetails.name}
                summary: {this.props.cardDetails.summary}
                img_url: {this.props.cardDetails.img_url}
                languages_used: {this.props.cardDetails.languages_used}
                order: {this.props.cardDetails.order} */}
            </div>
        )
    }
}