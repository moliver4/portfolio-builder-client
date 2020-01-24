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
                    <option selected >Make a Selection</option>
                    <option value="3">High</option>
                    <option value="2">Medium</option>
                    <option value="1">Low</option>
                    </select>
         </div>
             <button className="btn btn-info btn-sm" type='submit' name='submit' style={styles.button} value='Update Info' onClick={props.submitNewInfo}>Submit</button>
             <button className="btn btn-outline-danger btn-sm"  type='submit' name='submit' value='Update Info' onClick={e => props.cancelForm(e)}>Cancel</button>
     </form>
  
    )
  }

  const styles = {
    button: {
        marginRight: 20
    }
}
  
  export default EditExperienceForm 