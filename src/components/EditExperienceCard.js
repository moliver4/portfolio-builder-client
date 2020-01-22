import React, { Component } from "react";

const EditExperienceCard = props => {

const { company, role, summary, start_date, end_date } = props.experience;

const handleExperienceEditClick = () => {
    props.editExistingExperience(props.experience) 
}

// const handleAddExperienceClick = () => {
//     props.newExperienceClick()
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

                <button onClick={() => handleExperienceEditClick()}>Edit</button>
            </div>
        </div>
        {/* <div>
            <button onClick={() => handleAddExperienceClick()}>Add Skill</button>
        </div> */}
    </div>
  )
};

export default EditExperienceCard;