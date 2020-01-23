import React, { Component } from 'react'
import PortfolioEducationContainer from '../containers/PortfolioEducationContainer.js'
import PortfolioProjectsContainer from '../containers/PortfolioProjectsContainer.js'
import Adapter from '../services/Adapter'

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
            
            </div>
        )
    }
}

export default PortfolioScreen
