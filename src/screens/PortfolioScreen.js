import React, { Component } from 'react'
import Adapter from '../services/Adapter'
import PortfolioUserContainer from '../containers/PortfolioUserContainer'
import PortfolioCardContainer from '../containers/PortfolioCardContainer'


export class PortfolioScreen extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            loggedInUser:this.props.user,
            user: {},
            skills: [],
            projects: [],
            education: [],
            experiences: [],
            accolades: [], 
            match: false 
        }
    }
    
    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo = () => {
        const id = this.props.match.params.id;
        let body = {
            id: id
        }
        let userPromise = Adapter.findUserInfo(id, body)

        userPromise.then(data => this.updatePortfolioState(data))
    }

    updatePortfolioState=(data)=> {
        console.log(data)
        let loggedID
        if (this.state.loggedInUser.id) {
            loggedID=this.state.loggedInUser.id
        } 
        this.setState({
            user: data.user,
            skills: data.skills,
            projects: data.projects,
            education: data.educations,
            experiences: data.experiences,
            accolades: data.accolades,
            match: data.user.id === loggedID ? true : false
        }, () => console.log('state updated to', this.state))
    }
 

    // if user is logged in (prop passed from app.js), show the edit button that redirects to edit/user_id page

    render() {
        return (
            <div>
                <PortfolioUserContainer user={this.state.user} match={this.state.match}/>

                <PortfolioCardContainer skills={this.state.skills}  />
                <PortfolioCardContainer projects={this.state.projects} />
                <PortfolioCardContainer education={this.state.education} />
                <PortfolioCardContainer experiences={this.state.experiences} />
                <PortfolioCardContainer accolades={this.state.accolades} />
            </div>
        )
    }
}

export default PortfolioScreen
