import React from "react"


//look at example form
//deconstruct props 

const EditAccoladeForm = (props) => {
  console.log(props.cardDetails)

  const { name, summary, link, order } = props.cardDetails

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
                    <label for="picture-url">External Link </label>  
                    <input className="form-control" type='text' name='link' value={link} onChange={e => props.handleFormChange(e)}/>
                </div>
                <div class="form-group">
                    <label for="priority">Piority : </label>
                    <select onChange={e => props.handleFormChange(e)} class="form-control" name="order">
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

export default EditAccoladeForm