import React from 'react'

const EditExperienceForm = props => {

    const { company, role, summary, start_date, end_date } = props.experience;

    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        let newObj = {
            [event.target.name]: event.target.value
        }
        return props.onEditForm(newObj)
    }

    // udpate className so it matches other edit forms
    // value should be empty if this is a new skill 

    return(
        <div className="edit-form">
          <div onChange={(e) => handleChange(e)}>
            <h3>Company</h3>
            <input type="text" name="company" value={company}/><br></br>
            <h3>Role</h3>
            <input type="text" name="role" value={role}/><br></br>
            <p>Summary</p>
            <input type="textarea" name="summary" value={summary}/><br></br>
            <p>Start Date</p>
            <input type="text" name="start_date" value={start_date}/><br></br>
            <p>End Date</p>
            <input type="text" name="end_date" value={end_date}/><br></br>
          </div>
          <div>
              <button type="submit" onClick={console.log('submit button clicked')}>Submit</button>
          </div>
        </div>
  
    )
  }
  
  export default EditExperienceForm 