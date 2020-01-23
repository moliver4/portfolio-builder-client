import React from 'react'



const ShowAccoladeCard = (props) => {

    console.log(props.cardDetails)

    const {id, name, summary, link} = props.cardDetails

    return(
        <div>
          accolade card<br></br>
          {id}<br></br>
          {name}<br></br>
          {summary}<br></br>
          {link}<br></br>
        </div>
  
    )
  }
  
  
  export default ShowAccoladeCard