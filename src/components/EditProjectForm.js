import React from 'react'

//look at example form
//deconstruct props 
const EditProjectForm = (props) => {

    const {project_url, name, summary, img_url, languages_used, order} = props.cardDetails

    

    return(
        <form>
            <input onChange={e => props.handleFormChange(e)} type="number" name="id" value={props.cardDetails.id} hidden></input>
            <label>
            <h5>Link to Project: </h5>
            <input onChange={e => props.handleFormChange(e)} type="text" name="project_url" value={project_url}></input> 
            </label><br></br>
            <label>
            <h5>Project Name: </h5>
            <input onChange={e => props.handleFormChange(e)} type="text" name="name" value={name}></input> 
            </label><br></br>
            <label>
            <h5>Summary: </h5>
            <input onChange={e => props.handleFormChange(e)} type="text" name="summary" value={summary}></input> 
            </label><br></br>
            <label>
            <h5>Project Image URL: </h5>
            <input onChange={e => props.handleFormChange(e)} type="text" name="img_url" value={img_url}></input> 
            </label><br></br>
            <label>
            <h5>Languages Used: </h5>
            <input onChange={e => props.handleFormChange(e)} type="text" name="languages_used" value={languages_used}></input> 
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
  
  export default EditProjectForm