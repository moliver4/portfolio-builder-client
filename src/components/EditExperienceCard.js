import React, { Component } from "react";

const EditExperienceCard = props => {

const { experience } = props;

const handleClick = () => {
    props.editExistingExperience(props.experience) 
}

// replace class names
  return (
    <div className="ui card"> 
        <div className="skill">
            <div>
                {experience}
                <button onClick={() => handleClick()}>Edit</button>
            </div>
        </div>
    </div>
  )
};

export default EditExperienceCard;