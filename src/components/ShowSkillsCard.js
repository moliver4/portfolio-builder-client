import React, { Component } from 'react'



const ShowSkillsCard = (props) => {

    console.log(props.cardDetails)

    const { id, category, name, proficiency, link_url } = props.cardDetails

    const showProf=(p)=> {
        if (p === 1) {
            return 'Novice'
        } else if (p === 2) {
            return 'Intermediate'
        } else if (p === 3) {
            return 'Expert'
        } else {
            console.log('hello')
        }
    }

    return(

          <div className="card text-left">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <p className="card-text">{showProf(proficiency)}</p>
                {link_url ?
                <a href={link_url} className="card-link">Look</a>
                : 
                <a></a>
                }
            </div>
        </div>
  
    )
  }
  
  export default ShowSkillsCard