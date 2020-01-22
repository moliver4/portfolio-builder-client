import React, { Component } from 'react'

//look at example form
//deconstruct props 
const EditProjectForm = ( ) => {

    const {project_url, name, summary, img_url, languages_used, order} = this.props.cardDetails

    return(
        <form onChange={e => this.props.handleFormChange(e)}>
            project_url: <input type="text" name="project-url" value={project_url}></input>
            name: <input type="text" name="name" value={name}></input>
            summary: <input type="text" name="summary" value={summary}></input>
            img_url: <input type="text" name="img_url" value={img_url}></input>
            languages_used: <input type="text" name="languages_used" value={languages_used}></input>
            order: 
                    <select name="order"value={order}>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                    </select>
            <input onClick={} type="submit" value="submit"></input>
        </form>
    )
  }
  
  export default EditProjectForm