import React, { Component } from 'react'

//accepts props from parent of 1  obj, renders info for each attribute
//can be functional component if you want


export default class EditProjectsCard extends Component {

    // const {project_url, name, summary, img_url, languages_used, order} = this.props.cardDetails
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
                        <h6 className="card-subtitle mb-2 text-muted">Stack : {this.props.cardDetails.languages_used}</h6>
                        <p className="card-text">Summary : {this.props.cardDetails.summary}</p>
                        <p className="card-text">Img url : {this.props.cardDetails.img_url}</p>
                        <p className="card-text">External link : {this.props.cardDetails.project_url}</p>
                        <p className="card-text">priority : {this.displayCorrectOrder()}</p>
                    </div>
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <button  style={styles.button} onClick={e => this.props.changeEditing(e, this.props.cardDetails)} className="nav-link btn btn-outline-info btn-sm" >Edit</button>
                        </li>
                        <li className="nav-item">
                            <button style={styles.button} onClick={e => this.props.deleteObj('project', this.props.cardDetails.id)} className="nav-link btn btn-outline-danger btn-sm" >Delete</button>
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
