import React from 'react'


const EditProjectForm = (props) => {

    const {project_url, name, summary, img_url, languages_used, order} = props.cardDetails

    

    return(
    
            <form>
                <div className="form-group">
                    <label for="name">Name </label>
                    <input className="form-control" type='text' name='name' value={name} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="email-address">Summary </label> 
                    <input className="form-control" type='text' name='summary' value={summary} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="picture-url">Stack </label>  
                    <input className="form-control" type='text' name='languages_used' value={languages_used} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="background-url">Project URL </label>  
                    <input className="form-control" type='text' name='project_url' value={project_url} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="portfolio-layout">Image URL </label>  
                    <input className="form-control" type='text' name='img_url' value={img_url} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div class="form-group">
                    <label for="priority">Example select</label>
                    <select class="form-control" name="order">
                    <option>high</option>
                    <option>medium</option>
                    <option>low</option>
                    </select>
                </div>
                    <button className="btn btn-primary" type='submit' name='submit' value='Update Info' onClick={e => props.handleFormSubmit(e)}>submit</button>
                    <button className="btn btn-primary" type='submit' name='submit' value='Update Info' onClick={e => props.cancelForm(e)}>Cancel</button>
            </form>
    )
  }
  
  export default EditProjectForm