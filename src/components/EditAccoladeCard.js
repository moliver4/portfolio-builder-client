import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditAccoladeCard extends Component {

    render() {
        return (
                <div className="card">

                    <div class="card-body">
                        <h5 class="card-title">Name : {this.props.cardDetails.name}</h5>
                        <p class="card-text">Summary : {this.props.cardDetails.summary}</p>
                        <p class="card-text">External link : {this.props.cardDetails.link}</p>
                        <p class="card-text">Priority : {this.props.cardDetails.order}</p>
                    </div >
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} style={styles.button} className="nav-link btn btn-outline-info btn-sm" >Edit</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={e => this.props.deleteObj('accolade', this.props.cardDetails.id)} style={styles.button} className="nav-link btn btn-outline-danger btn-sm" >Delete</button>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}

const styles = {
    button: {
        marginLeft: 5
    }
}
