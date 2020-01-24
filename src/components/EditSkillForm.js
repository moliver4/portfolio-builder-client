import React from 'react'

//look at example form
//deconstruct props 
const EditSkillForm = (props) => {
    console.log('skillform details', props.cardDetails)

    const { category, name, proficiency, link_url, order } = props.cardDetails
  
    return(
        <form>
        <div className="form-group">
            <label for="name">Name </label>
            <input className="form-control" type='text' name='name' value={name} onChange={e => props.handleFormChange(e)}/>
        </div>
        <div className="form-group">
            <label for="email-address">Category </label> 
            <input className="form-control" type='text' name='category' value={category} onChange={e => props.handleFormChange(e)}/>
        </div>
        <div className="form-group">
            <label for="picture-url">External Link </label>  
            <input className="form-control" type='text' name='link_url' value={link_url} onChange={e => props.handleFormChange(e)}/>
        </div>
        <div class="form-group">
            <label for="priority">Proficiency </label>
            <select onChange={e => props.handleFormChange(e)} class="form-control" name="proficiency">
            <option selected >Make a selection</option>
            <option value="3">Expert</option>
            <option value="2">Intermediate</option>
            <option value="1">Novice</option>
            </select>
        </div>
        <div class="form-group">
        <label for="priority">Priority</label>
                    <select onChange={e => props.handleFormChange(e)} class="form-control" name="order">
                    <option selected >Make a selection</option>
                    <option value="3">high</option>
                    <option value="2">medium</option>
                    <option value="1">low</option>
                    </select>
        </div>
            <button className="btn btn-primary" type='submit' name='submit' value='Update Info' onClick={e => props.handleFormSubmit(e)}>submit</button>
            <button className="btn btn-primary" type='submit' name='submit' value='Update Info' onClick={e => props.cancelForm(e)}>Cancel</button>
        </form>
    )
  }
  
  export default EditSkillForm