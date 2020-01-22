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

  addObjFetchHandler = (name, obj) => {
    switch(name){
      case 'skill':
        let temp = Adapter.addSkill(obj)
        temp.then(data => this.addObjStateHandler('skill', data))
        break
      case 'project':
        let temp = Adapter.addProject(obj)
        temp.then(data => this.addObjStateHandler('project', data))
        break
      case 'education':
        let temp = Adapter.addEducation(obj)
        temp.then(data => this.addObjStateHandler('education', data))
        break
      case 'experience':
        let temp = Adapter.addExperience(obj)
        temp.then(data => this.addObjStateHandler('experience', data))
        break
      case 'accolade':
        let temp = Adapter.addAccolade(obj)
        temp.then(data => this.addObjStateHandler('accolade', data))
        break
      default:
        console.log('i got nothing, nothing was added and i cry')
        break
    }
  }

  addObjStateHandler = (name, data) => {
    switch(name){
      case 'skill':
        this.setState(prevState=> {
          return {
            skills: [...prevState.skills, data]
          }
        }, () => console.log('skill added') )
        break
      case 'project':
        this.setState(prevState=> {
          return {
            projects: [...prevState.projects, data]
          }
        }, () => console.log('project added') )
        break
      case 'education':
        this.setState(prevState=> {
          return {
            education: [...prevState.education, data]
          }
        }, () => console.log('education added') )
        break
      case 'experience':
        this.setState(prevState=> {
          return {
            experiences: [...prevState.experiences, data]
          }
        }, () => console.log('experience added') )
        break
      case 'accolade':
        this.setState(prevState=> {
          return {
            accolades: [...prevState.accolades, data]
          }
        }, () => console.log('accolade added') )
        break
      default:
        console.log('nothing was added and everything is broken')
        break
    }
  }


  deleteObjFetchHandler = (name, id) => {
    switch(name){
      case 'skill':
        let temp = Adapter.deleteSkill(id)
        temp.then(data => this.deleteObjStateHandler('skill', data))
        break
      case 'project':
        let temp = Adapter.deleteProject(id)
        temp.then(data => this.deleteObjStateHandler('project', data))
        break
      case 'education':
        let temp = Adapter.deleteEducation(id)
        temp.then(data => this.deleteObjStateHandler('education', data))
        break
      case 'experience':
        let temp = Adapter.deleteExperience(id)
        temp.then(data => this.deleteObjStateHandler('experience', data))
        break
      case 'accolade':
        let temp = Adapter.deleteAccolade(id)
        temp.then(data => this.deleteObjStateHandler('accolade', data))
        break
      default:
        console.log('i got nothing, delete fetch broken')
        break
    }
  }

  deleteObjStateHandler = (name, data) => {
    console.log(`${name} data: ${data} made it to set state handler for delete`)
    switch(name){
      case 'skill':
        this.setState(prevState=> {
          return {
            skill: this.deleteHelper(prevState.skills, data.id)
          }
        }, () => console.log('skill deleted') )
        break
      case 'project':
        this.setState(prevState=> {
          return {
            project: this.deleteHelper(prevState.projects, data.id)
          }
        }, () => console.log('project deleted') )
        break
      case 'education':
        this.setState(prevState=> {
          return {
            education: this.deleteHelper(prevState.education, data.id)
          }
        }, () => console.log('education deleted') )
        break
      case 'experience':
        this.setState(prevState=> {
          return {
            experience: this.deleteHelper(prevState.experiences, data.id)
          }
        }, () => console.log('experience deleted') )
        break
      case 'accolade':
        this.setState(prevState=> {
          return {
            accolade: this.deleteHelper(prevState.accolades, data.id)
          }
        }, () => console.log('accolade deleted') )
        break
      default:
        console.log('nothing was deleted and everything is broken')
        break
    }
  }

  deleteHelper = (prev, id) => {
    console.log(prev, id)
    return prev.filter(o => o.id !== id)
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
