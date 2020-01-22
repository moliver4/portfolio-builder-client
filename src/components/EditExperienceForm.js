import React, { Component } from 'react'

const EditExperienceForm = props => {

    const { experience } = props;

    const handleChange = (event) => {
        return props.onEditForm(event.target.value)
    }

    // udpate className so it matches other edit forms
    // value should be empty if this is a new skill 

    return(
        <div className="edit-form">
          <div>
            <input onChange={(e) => handleChange(e)} type="text" name="newExperience" value={experience}/>
          </div>
          <div>
              <button type="submit" onClick={console.log}>Submit</button>
          </div>
        </div>
  
    )
  }
  
  export default EditExperienceForm 