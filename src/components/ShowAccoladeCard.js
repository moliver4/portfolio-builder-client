import React from 'react'



const ShowAccoladeCard = (props) => {


    const {id, name, summary, link} = props.cardDetails

    return(
          <div className="card text-left">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-text mb-2 text-muted">{summary}</h6>
                {link ?
                <a href={link} className="card-link">Look</a>
                : 
                <a></a>
                }
            </div>
        </div>
    )
  }
  
  
  export default ShowAccoladeCard