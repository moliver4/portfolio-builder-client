import React, { Component } from 'react'
import ShowEducationCard from 'src/components/ShowEducationCard.js'

export class PortfolioEducationContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            education: []
        }
        this.getEducation()
    }

    getEducation(){
        fetch('http://example.com/movies.json')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    education: myJson
                })
            });
    }

    displayCards(){
        return this.state.education.map((item,index) => {
            return <ShowEducationCard key={index} cardDetails={item}></ShowEducationCard>
        })
    }

    // map through Projects list and render on Projects card component

    render() {
        return (
            <div>
                Education :  <br></br>
                {this.displayCards()}
            </div>
        )
    }
}

export default PortfolioEducationContainer
