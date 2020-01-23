import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditProjectsCard extends Component {

    // const {project_url, name, summary, img_url, languages_used, order} = this.props.cardDetails

    render() {
        return (
            <div>
                <p><strong>Name</strong> {this.props.cardDetails.name}</p>
                <p><strong>Summary</strong> {this.props.cardDetails.summary}</p>
                <p><strong>Project URL</strong> {this.props.cardDetails.project_url} </p>
                <p><strong>Languages Used</strong> {this.props.cardDetails.languages_used} </p>
                <p><strong>Image URL</strong> {this.props.cardDetails.img_url} </p>
                <p><strong>Display Order</strong> {this.props.cardDetails.order} </p>
                <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} type="button">Edit</button>
                <button onClick={e => this.props.deleteObj('project', this.props.cardDetails.id)} type="button">Delete</button>
                <br/>
                <br/>
            </div>
        )
    }
}