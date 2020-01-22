import React, { Component } from 'react'

const EditExperienceForm = props => {

    const { experience } = props;

    const handleChange = (event) => {
        
    }

    // udpate className so it matches other edit forms
    // value should be empty if this is a new skill --> need to verify

    return(
        <div className="edit-form">
          <div>
            <input onChange={(e) => handleChange(e)} type="text" name="experience" value={experience}/>
          </div>
        </div>
  
    )
  }
  
  export default EditExperienceForm 