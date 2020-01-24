import React from 'react'



const ShowProjectsCard = (props) => {

  console.log(props.cardDetails)

  const {id, name, summary, img_url, languages_used, project_url} = props.cardDetails

  return(

        <div className="card text-left">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{summary}</p>
            <p className="card-text">{languages_used}</p>
            {project_url ?
              <a href={project_url} className="card-link">Look</a>
              : 
              <a></a>
            }
          </div>
        </div>
     

  )
  }
  
  export default ShowProjectsCard