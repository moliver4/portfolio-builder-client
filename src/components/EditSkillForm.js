import React from 'react'

//look at example form
//deconstruct props 
const EditSkillForm = (props) => {
    console.log('skillform details', props.cardDetails)

    const { category, name, proficiency, link_url, order } = props.cardDetails
  
    return(
      <form>
      <input onChange={e => props.handleFormChange(e)} type="number" name="id" value={props.cardDetails.id} hidden></input>
      name: <input onChange={e => props.handleFormChange(e)} type="text" name="name" value={name}></input> <br></br>
      category: <input onChange={e => props.handleFormChange(e)} type="text" name="category" value={category}></input> <br></br>
      link_url: <input onChange={e => props.handleFormChange(e)} type="text" name="link_url" value={link_url}></input> <br></br>
                proficiency : 
                        <select onChange={e => props.handleFormChange(e)} name="proficiency" value={proficiency}>
                            <option value="">No Preference</option>
                            <option value="1">Novice</option>
                            <option value="2">Intermediate</option>
                            <option value="3">Expert</option>
                            {/* <option value="4">4</option>
                            <option value="5">5</option> */}
                        </select> <br></br>
                order: 
                        <select onChange={e => props.handleFormChange(e)} name="order" value={order}>
                            <option value="">Make A Selection</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> <br></br>
      <input onClick={e => props.handleFormSubmit(e, props.cardDetails.id)} type="submit" value="submit"></input>
  </form>
    )
  }
  
  export default EditSkillForm