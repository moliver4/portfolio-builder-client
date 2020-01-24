import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditEducationCard extends Component {

    render() {
        return (
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Institution : {this.props.cardDetails.institution}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Major : {this.props.cardDetails.major}</h6>
                        <p className="card-text">Graduation date : {this.props.cardDetails.grad_date}</p>
                        <p className="card-text">External link : {this.props.cardDetails.project_url}</p>
                        <p className="card-text">priority : {this.props.cardDetails.order}</p>
                    </div>
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} style={styles.button} className="nav-link btn btn-outline-info btn-sm"  >Edit</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={e => this.props.deleteObj('education', this.props.cardDetails.id)} style={styles.button} className="nav-link btn btn-outline-danger btn-sm" >Delete</button>
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
