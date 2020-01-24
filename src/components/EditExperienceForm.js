import React from 'react'

const EditExperienceForm = props => {

    const { company, role, summary, start_date, end_date, order } = props.experience;

    return(
         <form>
         <div className="form-group">
             <label for="name">Company </label>
             <input className="form-control" type='text' name='company' value={company} onChange={e => props.handleChange(e)}/>
         </div>
         <div className="form-group">
             <label for="email-address">Role </label> 
             <input className="form-control" type='text' name='role' value={role} onChange={e => props.handleChange(e)}/>
         </div>
         <div className="form-group">
             <label for="picture-url">summary </label>  
             <input className="form-control" type='text' name='summary' value={summary} onChange={e => props.handleChange(e)}/>
         </div>
         <div className="form-group">
             <label for="background-url">Start Date </label>  
             <input className="form-control" type='text' name='start_date' value={start_date} onChange={e => props.handleChange(e)}/>
         </div>
         <div className="form-group">
             <label for="portfolio-layout">End Date </label>  
             <input className="form-control" type='text' name='end_date' value={end_date} onChange={e => props.handleChange(e)}/>
         </div>
         <div class="form-group">
         <label for="priority">Priority</label>
                    <select onChange={e => props.handleChange(e)} class="form-control" name="order">
                    <option selected >Make a selection</option>
                    <option value="3">high</option>
                    <option value="2">medium</option>
                    <option value="1">low</option>
                    </select>
         </div>
             <button className="btn btn-primary" type='submit' name='submit' value='Update Info' onClick={props.submitNewInfo}>Submit</button>
             <button className="btn btn-primary" type='submit' name='submit' value='Update Info' onClick={e => props.cancelForm(e)}>Cancel</button>
     </form>
  
    )
  }
  
  export default EditExperienceForm 