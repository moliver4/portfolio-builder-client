import React from 'react'

//look at example form
//deconstruct props 
const EditSkillForm = (props) => {
    console.log('skillform details', props.cardDetails)

    const { category, name, proficiency, link_url, order } = props.cardDetails
  
    return(
      <form>
      <input onChange={e => props.handleFormChange(e)} type="number" name="id" value={props.cardDetails.id} hidden></input>
      <label>
      <h5>Skill Name: </h5>
      <input onChange={e => props.handleFormChange(e)} type="text" name="name" value={name}></input>   
      </label><br></br>
      <label>
      <h5>Category: </h5>
      <input onChange={e => props.handleFormChange(e)} type="text" name="category" value={category}></input> 
      </label><br></br>
      <label>
      <h5>Link to More Info: </h5>
      <input onChange={e => props.handleFormChange(e)} type="text" name="link_url" value={link_url}></input> 
      </label><br></br>
      <label>
                <h5>Proficiency: </h5> 
                        <select onChange={e => props.handleFormChange(e)} name="proficiency" value={proficiency}>
                            <option value="">No Preference</option>
                            <option value="1">Novice</option>
                            <option value="2">Intermediate</option>
                            <option value="3">Expert</option>
                            {/* <option value="4">4</option>
                            <option value="5">5</option> */}
                        </select> 
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
  
  export default EditSkillForm