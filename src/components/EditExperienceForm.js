import React from 'react'

const EditExperienceForm = props => {

    const { company, role, summary, start_date, end_date } = props.experience;

    // const handleSubmit = (event) => {
    //     alert('This submitted thing worked');
    //     event.preventDefault();
    //   }

    // udpate className so it matches other edit forms
    // value should be empty if this is a new skill 
    // why is submit button being triggered every time the form changes?

    return(
        <div className="edit-form">

          <div>
              <form onSubmit={props.submitNewInfo}>
                    <h3>Company</h3>
                    <input type="text" name="company" value={company} onChange={(e) => props.handleChange(e)} /><br></br>
                    <h3>Role</h3>
                    <input type="text" name="role" value={role} onChange={(e) => props.handleChange(e)}/><br></br>
                    <p>Summary</p>
                    <input type="textarea" name="summary" value={summary} onChange={(e) => props.handleChange(e)}/><br></br>
                    <p>Start Date</p>
                    <input type="text" name="start_date" value={start_date} onChange={(e) => props.handleChange(e)}/><br></br>
                    <p>End Date</p>
                    <input type="text" name="end_date" value={end_date} onChange={(e) => props.handleChange(e)}/><br></br>
                    <input type="submit" value="Submit" />
              </form>
          </div>

        </div>
  
    )
  }
  
  export default EditExperienceForm 