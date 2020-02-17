import React from "react"


//look at example form
//deconstruct props 

const EditEducationForm = (props) => {


  const { institution, major, grad_date, external_link, order } = props.cardDetails

  return(

<form>
                <div className="form-group">
                    <label for="name">Institution </label>
                    <input className="form-control" type='text' name='institution' value={institution} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="email-address">Major </label> 
                    <input className="form-control" type='text' name='major' value={major} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="picture-url">Graduation Date </label>  
                    <input className="form-control" type='text' name='grad_date' value={grad_date} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="background-url">External link </label>  
                    <input className="form-control" type='text' name='external_link' value={external_link} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div class="form-group">
                <label for="priority">Priority</label>
                    <select onChange={e => props.handleFormChange(e)} class="form-control" name="order">
                    <option selected >Make a Selection</option>

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

export default EditEducationForm