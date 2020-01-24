import React from 'react'



const ShowEducationCard = (props) => {

  console.log(props.cardDetails)

  const { id, institution, major, grad_date, external_link} = props.cardDetails

    return(
          <div className="card text-left">
            <div className="card-body">
                <h5 className="card-title">{institution}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{major}</h6>
                <h7 className="card-subtitle mb-2 text-muted">Graduation date</h7>
                <p className="card-text">{grad_date}</p>
                {external_link ?
                <a href={external_link} className="card-link">Look</a>
                : 
                <a></a>
                }
            </div>
        </div>
    )
  }
  
  
  export default ShowEducationCard