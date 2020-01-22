import React, { Component } from "react";

//accepts props from parent of 1  obj, renders info for each attribute

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