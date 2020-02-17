import React, { Component } from 'react'
import ShowEducationCard from '../components/ShowEducationCard.js'
import ShowProjectsCard from '../components/ShowProjectsCard.js'
import ShowSkillsCard from '../components/ShowSkillsCard.js'
import ShowExperienceCard from '../components/ShowExperienceCard.js'
import ShowAccoladeCard from '../components/ShowAccoladeCard.js'

export class PortfolioCardContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            containerName: ''
        }

        // console.log(this.props)
        // this.setContainerName()
    }

    setContainerName(){
        if(this.props.skills !== undefined){
            this.setState({containerName : "Skills"})
        } else  if(this.props.projects !== undefined){
            this.setState({containerName : "Projects"})
        } else  if(this.props.experiences !== undefined){
            this.setState({containerName : "Experience"})
        } else  if(this.props.education !== undefined){
            this.setState({containerName : "Education"})
        } else  if(this.props.accolades !== undefined){
            this.setState({containerName : "Accolades"})
        }
    }

    componentDidMount(){
        this.setContainerName()
    }

    displayCorrectCards(){
        if(this.props.skills !== undefined){
            // this.setState({containerName: "Skills"})
            return this.props.skills.map((item, index) => {
                return <ShowSkillsCard kye={index} cardDetails={item}></ShowSkillsCard>
            })
        } else if(this.props.projects !== undefined){
            // this.setState({containerName: "Projects"})
            return this.props.projects.map((item, index) => {
                return <ShowProjectsCard kye={index} cardDetails={item}></ShowProjectsCard>
            })
        } else if(this.props.experiences !== undefined){
            // this.setState({containerName: "Experience"})
            return this.props.experiences.map((item, index) => {
                return <ShowExperienceCard kye={index} cardDetails={item}></ShowExperienceCard>
            })
        } else  if(this.props.education !== undefined){
            // this.setState({containerName: "Education"})
            return this.props.education.map((item, index) => {
                return <ShowEducationCard kye={index} cardDetails={item}></ShowEducationCard>
            })
        } else  if(this.props.accolades !== undefined){
            // this.setState({containerName: "Accolades"})
            return this.props.accolades.map((item, index) => {
                return <ShowAccoladeCard kye={index} cardDetails={item}></ShowAccoladeCard>
            })
        }
    }

    // componentDidUpdate(){
    //     console.log(this.state)
    // }


    
    render() {
        return (
                    <div className="card text-center border-light">
                        <div className="card-body">
                            <h6 className="card-header text-muted" style={styles.about}>{this.state.containerName}</h6>
                            {this.displayCorrectCards()}
                        </div>
                    </div>
        )
    }
}


const styles = {
    about: {
        color: '#0fabbc',
        backgroundColor: '#e4f9ff',
        marginBottom: 2
    }
}

export default PortfolioCardContainer
