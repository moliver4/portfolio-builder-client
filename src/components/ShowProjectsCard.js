import React from 'react'



const ShowProjectsCard = (props) => {

  console.log(props.cardDetails)

  const {id, name, summary, img_url, languages_used} = props.cardDetails

  return(
      <div>
        project card<br></br>
        {id}<br></br>
        {name}<br></br>
        {summary}<br></br>
        {img_url}<br></br>
        {languages_used}<br></br>
      </div>

  )
  }
  
  export default ShowProjectsCard