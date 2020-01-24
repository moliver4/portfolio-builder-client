import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditAccoladeCard extends Component {
    
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

    render() {
        return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name : {this.props.cardDetails.name}</h5>
                        <p className="card-text">Summary : {this.props.cardDetails.summary}</p>
                        <p className="card-text">External link : {this.props.cardDetails.link}</p>
                        <p className="card-text">Priority : {this.props.cardDetails.order}</p>
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
