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
                <p><strong>Company</strong> {company}</p>
                <p><strong>Role</strong> {role}</p>
                <p><strong>Summary</strong> {summary}</p>
                <p><strong>Start Date</strong> {start_date}</p>
                <p><strong>End Date</strong> {end_date}</p>
                <p><strong>Order</strong> {order}</p>
                <button onClick={() => props.editExistingExperience(props.experience)}>Edit</button>
                <button onClick={() => props.deleteObj('experience', props.experience.id)} >Delete</button>
                <br/>
                <br/>
            </div>
        </div>
    </div>
  )
};

export default EditExperienceCard;