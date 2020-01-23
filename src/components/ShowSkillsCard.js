import React, { Component } from 'react'



const ShowSkillsCard = (props) => {

    console.log(props.cardDetails)

    const { id, category, name, proficiency, link_url } = props.cardDetails

    return(

          <div className="card text-left">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <p className="card-text">{proficiency}</p>
                <a href={link_url} className="card-link">Look</a>
            </div>
        </div>
  
    )
  }
  
  export default ShowSkillsCard