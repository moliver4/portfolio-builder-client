import React, { Component } from 'react'



const ShowExperienceCard = (props) => {

    console.log(props.cardDetails)

    const {id, company, role, summary, start_date, end_date, external_link} = props.cardDetails

    return(
        <div>
            experience card <br></br>
          {id} <br></br>
          {company} <br></br>
          {role} <br></br>
          {summary} <br></br>
          {start_date} <br></br>
          {start_date} <br></br>
          {end_date} <br></br>
          {external_link} <br></br>
        </div>
  
    )
  }
  
  export default ShowExperienceCard