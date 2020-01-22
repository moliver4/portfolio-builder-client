import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen'
import EditScreen from './screens/EditScreen'
import PortfolioScreen from './screens/PortfolioScreen'
import Adapter from './services/Adapter'
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      loggedIn: false,
      email: "",
      user: {},
      skills: [],
      projects: [],
      education: [],
      experiences: [],
      accolades: []  
    }
  }

  //reset state to default if needed 
  resetState=() => {
    this.setState({
      loggedIn: false,
      email: "",
      user: {},
      skills: [],
      projects: [],
      education: [],
      experiences: [],
      accolades: []  
    })
  }

  //toggles logIn and logout (optional)
  toggleLogin = () => {
    this.setState(prevState => {
      return {loggedIn: !prevState.loggedIn}
    })
  }

  submitLoginHandler = (e) => {
    e.preventDefault()
    console.log(this.state.email)
    let body = {
      email_address: this.state.email
    }
    let userPromise = Adapter.fetchUser(body)
    
    userPromise.then(data => this.updateState(data))

    this.toggleLogin()
  }


  updateState = (data) => {
    console.log(data)
    this.setState({
      user: data.user,
      skills: data.skills,
      projects: data.projects,
      education: data.education,
      experiences: data.experiences,
      accolades: data.accolades
    }, () => console.log(this.state.skills))
  }
  

  inputEmailChangeHandler = (e) => {
    let temp = e.target.value
    this.setState({
      email: temp
    })
  }

  addUserInfoHandler =(obj) => {
    console.log('add user info')
  }

  addSkillHandler =(obj) => {
    console.log('add skill')
  }

  addProjectHandler =(obj) => {
    console.log('add Project')
  }

  addEducationHandler =(obj) => {
    console.log('add Education')
  }

  addExperienceHandler =(obj) => {
    console.log('add Experience')
  }

  addAccoladeHandler =(obj) => {
    console.log('add Accolade')
  }


  render() {
    return (
      <div>
        <Router>
   
          <Route 
            exact path="/" 
            render={()=> <LoginScreen 
              loggedIn={!this.state.loggedIn}
              submitLogin={this.submitLoginHandler} 
              handleInputChange={this.inputEmailChangeHandler} 
              email={this.state.email}
              alternate="/edit"
            />}
          />
          <Route
            path="/edit"
            render={() => <EditScreen 
                            loggedIn={this.state.loggedIn}
                            user={this.state.user} 
                            skills={this.state.skills} 
                            projects={this.state.projects} 
                            education={this.state.education}
                            experiences={this.state.experiences}
                            accolades={this.state.accolades}
                            alternate="/"  
                            addUserInfo={this.addUserInfoHandler}
                            addSkill={this.addSkillHandler}
                            addProject={this.addProjectHandler}
                            addEducation={this.addEducationHandler}
                            addExperience={this.addExperienceHandler}
                            addAccolade={this.addAccoladeHandler} 
                          />}
          />
          <Route 
            path="/portfolio/:id" 
            render={(props) => <PortfolioScreen 
                                  {...props} 
                                  loggedIn={this.state.loggedIn} 
                                  user={this.state.user} 
                                />}
          />
        </Router>
      </div>
    )
  }
}

//portfolio screen will take prop and use this.props.match.params.id to send fetch request for that user id


export default App;
