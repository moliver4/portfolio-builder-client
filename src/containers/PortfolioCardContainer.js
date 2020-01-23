import React, { Component } from 'react'
import ShowEducationCard from '../components/ShowEducationCard.js'
import ShowProjectsCard from '../components/ShowProjectsCard.js'
import ShowSkillsCard from '../components/ShowSkillsCard.js'
import ShowUserCard from '../components/ShowUserCard.js'
import ShowExperienceCard from '../components/ShowExperienceCard.js'

export class PortfolioCardContainer extends Component {

    constructor(props){
        super(props)


        console.log(this.props)
    }



    
    render() {
        return (
            <div>
                <h1>Show page container</h1>
            </div>
        )
    }
}

export default PortfolioCardContainer
