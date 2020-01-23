import React from 'react'



const EditUserForm = (props) => {

    const { name, email_address, avatar_url, background_url, template } = props.user

    return(
        <div className="form-row">
          <form>
            <label>
                Name: 
                <input type='text' name='name' value={name} onChange={e => props.handleStateChange(e)}/>
            </label><br/>
            <label>
                Email Address: 
                <input type='text' name='email_address' value={email_address} onChange={e => props.handleStateChange(e)}/>
            </label><br/>
            <label>
                Profile Picture URL: 
                <input type='text' name='avatar_url' value={avatar_url} onChange={e => props.handleStateChange(e)}/>
            </label><br/>
            <label>
                Background Image URL: 
                <input type='text' name='background_url' value={background_url} onChange={e => props.handleStateChange(e)}/>
            </label><br/>
            <label>
                Portfolio Layout: 
                <input type='text' name='template' value={template} onChange={e => props.handleStateChange(e)}/>
            </label><br/>
                <input type='submit' name='submit' value='Update Info' onClick={e => props.handleFormSubmit(e)}/>
           <br/>
          </form>
        </div>
  
    )
  }
  
  export default EditUserForm