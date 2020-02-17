import React, { Component, Fragment } from 'react'
import Adapter from '../services/Adapter'
import PortfolioUserContainer from '../containers/PortfolioUserContainer'
import PortfolioCardContainer from '../containers/PortfolioCardContainer'
import NavBar from '../components/NavBar'
import {Redirect} from 'react-router-dom'
import Footer from '../components/Footer'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

export class PortfolioScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: props.loggedInUser,
            user: {},
            skills: null,
            projects: [],
            education: [],
            experiences: [],
            accolades: [], 
            match: false,
            error: false
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
        .catch(error => this.setError(error))
    }

    setError = (error) => {
        // console.log(error)
        this.setState({error: true})
    }

    updatePortfolioState=(data)=> {
        console.log('hello did i make it here with my data?', data)
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
        })
    }
    
    sortData = (data) => {
        let sorted = data.sort((a,b) => b.order - a.order)
        // console.log(sorted)
        return sorted 
        
    }
    // if user is logged in (prop passed from app.js), show the edit button that redirects to edit/user_id page

    render() {
        if (this.state.skills !== null) {
        return (
            <div> 
                {this.props.loggedIn && this.state.match ? <NavBar portfolio={true} logout={this.props.logout}/> : null} 
                <div className="container">
                    <div className="row">
                        <PortfolioUserContainer user={this.state.user} match={this.state.match}/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <PortfolioCardContainer user={this.state.user} skills={this.sortData(this.state.skills)}  />
                            <PortfolioCardContainer user={this.state.user} education={this.sortData(this.state.education)} />
                            <PortfolioCardContainer user={this.state.user} accolades={this.sortData(this.state.accolades)} />
                        </div>
                        <div className="col-md-8">
                            <PortfolioCardContainer user={this.state.user} experiences={this.sortData(this.state.experiences)} />
                            <PortfolioCardContainer user={this.state.user} projects={this.sortData(this.state.projects)} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )} else if (this.state.error) {
            return <Redirect to='/' />
        } else {
            return (<div class="preloader-wrapper active">
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="gap-patch">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>)
        }
    }
}

export default PortfolioScreen
