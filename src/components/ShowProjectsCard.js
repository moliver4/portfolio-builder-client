import React from 'react'



const ShowProjectsCard = (props) => {

    // render each attribute

    const {project_url, name, summary, img_url, languages_used, order} = props.cardDetails

    return(
        <div>
          project_url {project_url}
          name {name}
          summary {summary}
          img_url {img_url}
          languages_used {languages_used}
          order {order}
        </div>
  
    )
  }
  
  export default ShowProjectsCard