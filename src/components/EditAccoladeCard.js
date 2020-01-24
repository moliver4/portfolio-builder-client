import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditAccoladeCard extends Component {

    render() {
        return (
                <div className="card">
                    <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} class="nav-link" >Edit</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={e => this.props.deleteObj('accolade', this.props.cardDetails.id)} className="nav-link" >Delete</button>
                    </li>
                    </ul>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Institution : {this.props.cardDetails.name}</h5>
                        <p class="card-text">Graduation date : {this.props.cardDetails.summary}</p>
                        <p class="card-text">External link : {this.props.cardDetails.link}</p>
                        <p class="card-text">priority : {this.props.cardDetails.order}</p>
                    </div>
                </div>
        )
    }
}