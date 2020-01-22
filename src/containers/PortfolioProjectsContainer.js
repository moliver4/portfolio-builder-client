import React, { Component } from 'react'
import ShowProjectsCard from './src/components/ShowProjectsCard.js'

export class PortfolioProjectsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
        this.getProjects()
    }

    getProjects(){
        fetch('http://example.com/movies.json')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    projects: myJson
                })
            });
    }

    displayCards(){
        return this.state.projects.map((item,index) => {
            return <ShowProjectsCard key={index} cardDetails={item}></ShowProjectsCard>
        })
    }

    // map through Projects list and render on Projects card component

    render() {
        return (
            <div>
                Projects :  <br></br>
                {this.displayCards()}
            </div>
        )
    }
}

export default PortfolioProjectsContainer