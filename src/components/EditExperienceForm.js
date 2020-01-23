import React from 'react'

const EditExperienceForm = props => {

    const { company, role, summary, start_date, end_date, order } = props.experience;

    return(
        <div className="edit-form">

          <div>
              <form >
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
                    <p>order:</p> 
                    <select onChange={e => props.handleChange(e)} name="order" value={order}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select> <br></br>
                    <input type="submit" value="Submit" onClick={props.submitNewInfo} />
              </form>
          </div>

        </div>
  
    )
  }
  
  export default EditExperienceForm 