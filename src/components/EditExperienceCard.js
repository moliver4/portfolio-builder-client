import React from "react";

const EditExperienceCard = props => {

const { company, role, summary, start_date, end_date, order } = props.experience;

// const handleExperienceEditClick = () => {
//     props.editExistingExperience(props.experience) 
// }

// replace class names
  return (
<div className="card">
<div className="card-header">
<ul className="nav nav-pills card-header-pills">
<li className="nav-item">
    <button onClick={() => props.editExistingExperience(props.experience)} class="nav-link" >Edit</button>
</li>
<li className="nav-item">
    <button onClick={() => props.deleteObj('experience', props.experience.id)} className="nav-link" >Delete</button>
</li>
</ul>
</div>
<div class="card-body">
    <h5 class="card-title">Company : {company}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role : {role}</h6>
    <p class="card-text">Summary : {summary}</p>
    <p class="card-text">Start Date : {start_date}</p>
    <p class="card-text">End Date : {end_date}</p>
    <p class="card-text">priority : {order}</p>
</div>
</div>
  )
};

export default EditExperienceCard;