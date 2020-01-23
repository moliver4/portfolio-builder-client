import React, { Component } from 'react'



const ShowExperienceCard = (props) => {

    console.log(props.cardDetails)

    const {id, company, role, summary, start_date, end_date, external_link} = props.cardDetails

    return(
  
          <div className="card">
            <div className="card-body">
                <h5 className="card-title">{company}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{role}</h6>
                <p className="card-text">{summary}</p>
                <h7 className="card-subtitle mb-2 text-muted">Start</h7>
                <p className="card-text">{start_date}</p>
                <h7 className="card-subtitle mb-2 text-muted">End</h7>
                <p className="card-text">{end_date}</p>
                <a href={external_link} className="card-link">Look</a>
            </div>
        </div>
  
    )
  }
  
  export default ShowExperienceCard