import React, { Component } from 'react'

const EditExperienceForm = props => {

    const { company, role, summary, start_date, end_date } = props.experience;

    const handleChange = (event) => {
        return props.onEditForm(event.target.value)
    }

    // udpate className so it matches other edit forms
    // value should be empty if this is a new skill 

    return(
        <div className="edit-form">
          <div onChange={(e) => handleChange(e)}>
            <input type="text" name="newExperience" value={company}/>
            <input type="text" name="newExperience" value={role}/>
            <input type="text" name="newExperience" value={summary}/>
            <input type="text" name="newExperience" value={start_date}/>
            <input type="text" name="newExperience" value={end_date}/>
          </div>
          <div>
              <button type="submit" onClick={console.log}>Submit</button>
          </div>
        </div>
  
    )
  }
  
  export default EditExperienceForm 