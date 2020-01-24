import React from "react"


//look at example form
//deconstruct props 

const EditEducationForm = (props) => {
  console.log(props.cardDetails)

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

export default EditEducationForm