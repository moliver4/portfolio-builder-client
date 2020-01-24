import React from "react";

const EditExperienceCard = props => {

const { company, role, summary, start_date, end_date, order } = props.experience;

// const handleExperienceEditClick = () => {
//     props.editExistingExperience(props.experience) 
// }

// replace class names
  return (
    <div className="card">
      <div className="card-body">
          <h5 className="card-title">Company : {company}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Role : {role}</h6>
          <p className="card-text">Summary : {summary}</p>
          <p className="card-text">Start Date : {start_date}</p>
          <p className="card-text">End Date : {end_date}</p>
          <p className="card-text">priority : {order}</p>
      </div>
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
              <button onClick={() => props.editExistingExperience(props.experience)} style={styles.button} className="nav-link btn btn-outline-info btn-sm" >Edit</button>
          </li>
          <li className="nav-item">
              <button onClick={() => props.deleteObj('experience', props.experience.id)} style={styles.button} className="nav-link btn btn-outline-danger btn-sm" >Delete</button>
          </li>
        </ul>
      </div>
    </div>
  )
};

const styles = {
  button: {
      marginLeft: 5
  }
}


export default EditExperienceCard;
