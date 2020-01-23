import React, { Component } from 'react'



const ShowSkillsCard = (props) => {

    console.log(props.cardDetails)

    const { id, category, name, proficiency, link_url } = props.cardDetails

    return(
        <div>
            skill card <br></br>
          {id} <br></br>
          {category} <br></br>
          {name} <br></br>
          {proficiency} <br></br>
          {link_url} <br></br>
        </div>
  
    )
  }
  
  export default ShowSkillsCard