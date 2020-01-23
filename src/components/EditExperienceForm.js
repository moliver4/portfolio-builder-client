import React from 'react'

const EditExperienceForm = props => {

    const { company, role, summary, start_date, end_date, order } = props.experience;

    return(
        <div className="edit-form">

          <div>
              <form >
                    <label>
                        <h5>Company: </h5>
                    <input type="text" name="company" value={company} onChange={(e) => props.handleChange(e)} /><br></br>
                    </label>
                    <label>
                    <h5>Role: </h5>
                    <input type="text" name="role" value={role} onChange={(e) => props.handleChange(e)}/><br></br>
                    </label>
                    <label>
                    <h5>Summary: </h5>
                    <input type="textarea" name="summary" value={summary} onChange={(e) => props.handleChange(e)}/><br></br>
                    </label>
                    <label>
                    <h5>Start Date: </h5>
                    <input type="text" name="start_date" value={start_date} onChange={(e) => props.handleChange(e)}/><br></br>
                    </label>
                    <label>
                    <h5>End Date: </h5>
                    <input type="text" name="end_date" value={end_date} onChange={(e) => props.handleChange(e)}/><br></br>
                    </label>
                    <label>
                    <h5>Order: </h5> 
                    <select onChange={e => props.handleChange(e)} name="order" value={order}>
                        <option value="">Make A Selection</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select> <br></br>
                    </label>
                    <input type="submit" value="Submit" onClick={props.submitNewInfo} />
              </form>
          </div>

        </div>
  
    )
  }
  
  export default EditExperienceForm 