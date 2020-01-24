import React from 'react'



const EditUserForm = (props) => {

    const { name, email_address, avatar_url, background_url, template } = props.user

    return(
          <form >
              <div className="form-group">
                <label for="name">Name </label>
                <input className="form-control" type='text' name='name' value={name} onChange={e => props.handleStateChange(e)}/>
            </div>

            <div className="form-group">
                <label for="email-address">Email Address </label> 
                <input className="form-control" type='text' name='email_address' value={email_address} onChange={e => props.handleStateChange(e)}/>
            </div>
            <div className="form-group">
                <label for="picture-url">Profile Picture URL </label>  
                <input className="form-control" type='text' name='avatar_url' value={avatar_url} onChange={e => props.handleStateChange(e)}/>
            </div>
            <div className="form-group">
                <label for="background-url">Background Image URL </label>  
                <input className="form-control" type='text' name='background_url' value={background_url} onChange={e => props.handleStateChange(e)}/>
            </div>
            <div className="form-group">
                <label for="portfolio-layout">Template </label>  
                <input className="form-control" type='text' name='template' value={template} onChange={e => props.handleStateChange(e)}/>
            </div>
            
                <button className="nav-link btn btn-info btn-sm" type='submit' name='submit' value='Update Info' onClick={e => props.handleFormSubmit(e)}>Save Info</button>
        </form>
    )
  }
  
  export default EditUserForm