import React from "react"


//look at example form
//deconstruct props 

const EditEducationForm = (props) => {
  console.log(props.cardDetails)

  const { institution, major, grad_date, external_link, order } = props.cardDetails

  return(
    <form>
    <input onChange={e => props.handleFormChange(e)} type="number" name="id" value={props.cardDetails.id} hidden></input>
    <label>
    <h5>Institution: </h5>
    <input onChange={e => props.handleFormChange(e)} type="text" name="institution" value={institution}></input> 
    </label><br></br>
    <label>
    <h5>Major: </h5>
    <input onChange={e => props.handleFormChange(e)} type="text" name="major" value={major}></input> 
    </label><br></br>
    <label>
    <h5>Graduation Date: </h5>
    <input onChange={e => props.handleFormChange(e)} type="text" name="grad_date" value={grad_date}></input> 
    </label><br></br>
    <label>
    <h5>Link to Education: </h5>
    <input onChange={e => props.handleFormChange(e)} type="text" name="external_link" value={external_link}></input> 
    </label><br></br>
    <label>
    <h5>Order: </h5>
            <select onChange={e => props.handleFormChange(e)} name="order" value={order}>
                <option value="">Make A Selection</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> 
    </label><br></br>
    <input onClick={e => props.handleFormSubmit(e, props.cardDetails.id)} type="submit" value="submit"></input>
</form>
  )
}

export default EditEducationForm