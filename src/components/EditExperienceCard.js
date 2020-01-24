import React, { Component } from 'react'



export default class EditExperienceCard extends Component {

// const { company, role, summary, start_date, end_date, order } = this.props.Card;

// const handleExperienceEditClick = () => {
//     props.editExistingExperience(props.experience) 

// }
displayCorrectOrder(){
  switch(this.props.experience.order){
      case 3:
          return "High"
          case 2:
              return "Medium"
              default:
                  return "Low"
  }
}

// replace class names
render () {
    return (
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">Company : {this.props.experience.company}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Role : {this.props.experience.role}</h6>
            <p className="card-text">Summary : {this.props.experience.summary}</p>
            <p className="card-text">Start Date : {this.props.experience.start_date}</p>
            <p className="card-text">End Date : {this.props.experience.end_date}</p>
            <p className="card-text">Priority : {this.displayCorrectOrder()}</p>
        </div>
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
                <button onClick={() => this.props.editExistingExperience(this.props.experience)} style={styles.button} className="nav-link btn btn-outline-info btn-sm" >Edit</button>
            </li>
            <li className="nav-item">
                <button onClick={() => this.props.deleteObj('experience', this.props.experience.id)} style={styles.button} className="nav-link btn btn-outline-danger btn-sm" >Delete</button>
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
