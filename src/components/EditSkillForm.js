import React from 'react'


const EditSkillForm = (props) => {


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
                    <option value="3">High</option>
                    <option value="2">Medium</option>
                    <option value="1">Low</option>
                    </select>
        </div>
            <button className="btn btn-info btn-sm" type='submit' name='submit' style={styles.button} value='Update Info' onClick={e => props.handleFormSubmit(e)}>Submit</button>
            <button className="btn btn-outline-danger btn-sm"  type='submit' name='submit' value='Update Info' onClick={e => props.cancelForm(e)}>Cancel</button>
        </form>
    )
  }
  

  const styles = {
    button: {
        marginRight: 20
    }
}

  export default EditSkillForm