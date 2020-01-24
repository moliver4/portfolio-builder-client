import React, { Component } from 'react'

//accepts props from parent of 1 skill obj, renders info for each attribute
//can be functional component if you want


export default class EditSkillCard extends Component {

    displayCorrectOrder(){
        switch(this.props.cardDetails.order){
            case 3:
                return "High"
                case 2:
                    return "Medium"
                    default:
                        return "Low"
        }
    }

    displayCorrectProficiency(){
        switch(this.props.cardDetails.proficiency){
            case 3:
                return "Expert"
                case 2:
                    return "Intermediate"
                    default:
                        return "Novice"
        }
    }

    render() {
        return (
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name : {this.props.cardDetails.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Category : {this.props.cardDetails.category}</h6>
                        <p className="card-text">External Link : {this.props.cardDetails.link_url}</p>
                        <p className="card-text">Proficiency : {this.displayCorrectProficiency()}</p>
                        <p className="card-text">Priority : {this.displayCorrectOrder()}</p>
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
