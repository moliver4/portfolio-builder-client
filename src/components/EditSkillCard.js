import React, { Component } from 'react'

//accepts props from parent of 1 skill obj, renders info for each attribute
//can be functional component if you want


export default class EditSkillCard extends Component {

    render() {
        return (
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name : {this.props.cardDetails.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Category : {this.props.cardDetails.category}</h6>
                        <p className="card-text">External Link : {this.props.cardDetails.link_url}</p>
                        <p className="card-text">Proficiency : {this.props.cardDetails.proficiency}</p>
                        <p className="card-text">Priority : {this.props.cardDetails.order}</p>
                    </div>
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} style={styles.button} className="nav-link btn btn-outline-info btn-sm" >Edit</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={e => this.props.deleteObj('skill', this.props.cardDetails.id)} style={styles.button} className="nav-link btn btn-outline-danger btn-sm" >Delete</button>
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
