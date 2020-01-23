import React from "react";

const EditExperienceCard = props => {

const { company, role, summary, start_date, end_date, order } = props.experience;

// const handleExperienceEditClick = () => {
//     props.editExistingExperience(props.experience) 
// }

// replace class names
  return (
    <div className="ui card"> 
        <div className="Experience">
            <div>
                <h4>{company}</h4>
                <h5>{role}</h5>
                <p>{summary}</p>
                <p>{start_date}</p>
                <p>{end_date}</p>
                order: {order} <br></br>

                <button onClick={() => props.editExistingExperience(props.experience)}>Edit</button>
                <button onClick={() => props.deleteObj('experience', props.experience.id)} >Delete</button>
            </div>
        </div>
    </div>
  )
};

export default EditExperienceCard;