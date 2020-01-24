import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditProjectsCard extends Component {

    // const {project_url, name, summary, img_url, languages_used, order} = this.props.cardDetails

    render() {
        return (
                <div className="card">
                    <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} class="nav-link" >Edit</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={e => this.props.deleteObj('project', this.props.cardDetails.id)} className="nav-link" >Delete</button>
                    </li>
                    </ul>
                </div>
                    <div class="card-body">
                        <h5 class="card-title">Name : {this.props.cardDetails.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Stack : {this.props.cardDetails.languages_used}</h6>
                        <p class="card-text">Summary : {this.props.cardDetails.summary}</p>
                        <p class="card-text">Img url : {this.props.cardDetails.img_url}</p>
                        <p class="card-text">External link : {this.props.cardDetails.project_url}</p>
                        <p class="card-text">priority : {this.props.cardDetails.order}</p>
                    </div>
                </div>
        )
    }
}