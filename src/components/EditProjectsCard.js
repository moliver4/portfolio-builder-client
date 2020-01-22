import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditProjectsCard extends Component {

    // const {project_url, name, summary, img_url, languages_used, order} = this.props.cardDetails

    render() {
        return (
            <div>
                project_url: {this.props.cardDetails.project_url} <br></br>
                name: {this.props.cardDetails.name} <br></br>
                summary: {this.props.cardDetails.summary} <br></br>
                img_url: {this.props.cardDetails.img_url} <br></br>
                languages_used: {this.props.cardDetails.languages_used} <br></br>
                order: {this.props.cardDetails.order} <br></br>
                <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} type="button">edit</button>
            </div>
        )
    }
}