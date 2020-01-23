import React, { Component } from 'react'
import ShowEducationCard from '../components/ShowEducationCard.js'
import ShowProjectsCard from '../components/ShowProjectsCard.js'
import ShowSkillsCard from '../components/ShowSkillsCard.js'
import ShowUserCard from '../components/ShowUserCard.js'
import ShowExperienceCard from '../components/ShowExperienceCard.js'

export class PortfolioEducationContainer extends Component {

    
    render() {
        return (
            <div>
                {this.displayCards()}
            </div>
        )
    }
}

export default PortfolioEducationContainer
