import React, { Component } from "react";

const EditExperienceCard = props => {

const { experience } = props;

const handleExperienceEditClick = () => {
    props.editExistingExperience(props.experience) 
}

const handleAddExperienceClick = () => {
    props.newExperienceClick()
}

// replace class names
  return (
    <div className="ui card"> 
        <div className="Experience">
            <div>
                {experience}
                <button onClick={() => handleExperienceEditClick()}>Edit</button>
            </div>
        </div>
        <div>
            <button onClick={() => handleAddExperienceClick()}>Add Skill</button>
        </div>
    </div>
  )
};

export default EditExperienceCard;