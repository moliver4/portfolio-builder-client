import React from 'react'



const EditUserForm = (props) => {

    console.log('these are the props sent to user form', props)
    const { name, email_address, avatar_url, background_url, template } = props.user

    // const handleEditInfo = (event) => {
    //     console.log(event.target.value)
    //     let obj = props.user.map(key => {
    //         if 
    //     })
    //     // props.editUserInfo('user', obj)
    // }

    return(
        <div className="form-row">
          <form>
            <label>
                Name: 
                <input type='text' name='name' value={name} onChange={e => props.handleStateChange(e)}/>
            </label>
          </form>
        </div>
  
    )
  }
  
  export default EditUserForm