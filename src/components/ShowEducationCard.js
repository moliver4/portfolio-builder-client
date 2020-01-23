import React from 'react'



const ShowEducationCard = (props) => {

  console.log(props.cardDetails)

  const { id, institution, major, grad_date, external_link} = props.cardDetails

    return(
        <div>
          education card<br></br>
          {id}<br></br>
          {institution}<br></br>
          {major}<br></br>
          {grad_date}<br></br>
          {external_link}<br></br>
        </div>
  
    )
  }
  
  
  export default ShowEducationCard