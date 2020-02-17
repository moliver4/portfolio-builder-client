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
      newUser: false,
      user: {},
      skills: [],
      projects: [],
      education: [],
      experiences: [],
      accolades: []  
    }
  }

  toggleSignIn = () => {
    this.setState(prevState => ({
        newUser: !prevState.newUser
    }))
}

  //toggles logIn and logout (optional)
  toggleLogin = () => {
    this.setState(prevState => {
      return {loggedIn: !prevState.loggedIn}
    })
  }

  //**MAYBE DELETE THIS? */
  submitLoginHandler = (e) => {
    e.preventDefault()
    if (this.state.email.length < 6) {
      window.alert('Please enter a valid email address.')
      return
    }
    let body = {
      email_address: this.state.email
    }
    let userPromise = Adapter.fetchUser(body)
    userPromise.then(data => this.updateState(data))
  }

  // DK - keep loggedIn state change in the body of setState so up-to-date state is sent down to components
  updateState = (data) => {
    this.setState({
      user: data.user,
      skills: data.skills,
      projects: data.projects,
      education: data.educations,
      experiences: data.experiences,
      accolades: data.accolades,
      loggedIn: true 
    })
  }
  

  inputEmailChangeHandler = (e) => {
    let temp = e.target.value
    this.setState({
      email: temp
    })
  }

  addObjFetchHandler = (name, obj) => {
    let temp
    switch(name){
      case 'skill':
        temp = Adapter.addSkill(obj)
        temp.then(data => this.addObjStateHandler('skill', data))
        break
      case 'project':
        temp = Adapter.addProject(obj)
        temp.then(data => this.addObjStateHandler('project', data))
        break
      case 'education':
        temp = Adapter.addEducation(obj)
        temp.then(data => this.addObjStateHandler('education', data))
        break
      case 'experience':
        temp = Adapter.addExperience(obj)
        temp.then(data => this.addObjStateHandler('experience', data))
        break
      case 'accolade':
        temp = Adapter.addAccolade(obj)
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
        })
        break
      case 'project':
        this.setState(prevState=> {
          return {
            projects: [...prevState.projects, data]
          }
        })
        break
      case 'education':
        this.setState(prevState=> {
          return {
            education: [...prevState.education, data]
          }
        })
        break
      case 'experience':
        this.setState(prevState=> {
          return {
            experiences: [...prevState.experiences, data]
          }
        })
        break
      case 'accolade':
        this.setState(prevState=> {
          return {
            accolades: [...prevState.accolades, data]
          }
        })
        break
      default:
        break
    }
  }

  editObjFetchHandler = (name, obj) => {
    let temp;
    switch(name){
      case 'skill':
        temp = Adapter.editSkill(obj)
        temp.then(data => this.editObjStateHandler('skill', data))
        break
      case 'project':
        temp = Adapter.editProject(obj)
        temp.then(data => this.editObjStateHandler('project', data))
        break
      case 'education':
        temp = Adapter.editEducation(obj)
        temp.then(data => this.editObjStateHandler('education', data))
        break
      case 'experience':
        temp = Adapter.editExperience(obj)
        temp.then(data => this.editObjStateHandler('experience', data))
        break
      case 'accolade':
        temp = Adapter.editAccolade(obj)
        temp.then(data => this.editObjStateHandler('accolade', data))
        break
      case 'user':
        temp = Adapter.editUser(obj)
        temp.then(data => this.editObjStateHandler('user', data))
        break
      default:

        break
    }
  }

  editObjStateHandler = (name, data) => {

    switch(name){
      case 'skill':
        this.setState(prevState=> {
          return {
            skills: this.editHelper(prevState.skills, data)
          }
        })
        break
      case 'project':
        this.setState(prevState=> {
          return {
            projects: this.editHelper(prevState.projects, data)
          }
        })
        break
      case 'education':
        this.setState(prevState=> {
          return {
            education: this.editHelper(prevState.education, data)
          }
        })
        break
      case 'experience':
        this.setState(prevState=> {
          return {
            experiences: this.editHelper(prevState.experiences, data)
          }
        })
        break
      case 'accolade':
        this.setState(prevState=> {
          return {
            accolades: this.editHelper(prevState.accolades, data)
          }
        })
        break
      case 'user':
        this.setState( 
           {
            user: data
          }
         )
        break
      default:
        break
    }
  }

  editHelper = (prev, obj) => {
    let temp = prev.map(o => {
      return o.id !== obj.id ? o:  obj
    })
    return temp
  }


  deleteObjFetchHandler = (name, id) => {
    let temp;
    switch(name){
      case 'skill':
        temp = Adapter.deleteSkill(id)
        temp.then(data => this.deleteObjStateHandler('skill', data))
        break
      case 'project':
        temp = Adapter.deleteProject(id)
        temp.then(data=>this.deleteObjStateHandler('project', data))
        break
      case 'education':
        temp = Adapter.deleteEducation(id)
        temp.then(data => this.deleteObjStateHandler('education', data))
        break
      case 'experience':
        temp = Adapter.deleteExperience(id)
        temp.then(data => this.deleteObjStateHandler('experience', data))
        break
      case 'accolade':
        temp = Adapter.deleteAccolade(id)
        temp.then(data => this.deleteObjStateHandler('accolade', data))
        break
      default:

        break
    }
  }

  deleteObjStateHandler = (name, data) => {

    switch(name){
      case 'skill':
        this.setState(prevState=> {
          return {
            skills: this.deleteHelper(prevState.skills, data.id)
          }
        })
        break
      case 'project':
        this.setState(prevState=> {
          return {
            projects: this.deleteHelper(prevState.projects, data.id)
          }
        })
        break
      case 'education':
        this.setState(prevState=> {
          return {
            education: this.deleteHelper(prevState.education, data.id)
          }
        })
        break
      case 'experience':
        this.setState(prevState=> {
          return {
            experiences: this.deleteHelper(prevState.experiences, data.id)
          }
        })
        break
      case 'accolade':
        this.setState(prevState=> {
          return {
            accolades: this.deleteHelper(prevState.accolades, data.id)
          }
        })
        break
      default:

        break
    }
  }

  deleteHelper = (prev, id) => {

    return prev.filter(o => o.id !== id)
  }


  //reset state to default if needed 
  resetState=() => {
    this.setState({
      loggedIn: false,
      newUser: false,
      user: {},
      skills: [],
      projects: [],
      education: [],
      experiences: [],
      accolades: []  
    })
  }

  logoutHandler = () => {
    localStorage.clear()
    this.resetState()
  }


  render() {
    return (
      <div>
        <Router>
   
          <Route 
            exact path="/" 
            render={()=> <LoginScreen 
              loggedIn={!this.state.loggedIn}
              toggleSignIn={this.toggleSignIn}
              newUser={this.state.newUser}
              updateState={this.updateState}
              submitLogin={this.submitLoginHandler} 
              handleInputChange={this.inputEmailChangeHandler} 
              email={this.state.email}
              alternate="/edit"
            />}
          />
          <Route
            path="/edit"
            render={() => <EditScreen 
                            logout={this.logoutHandler}
                            loggedIn={this.state.loggedIn}
                            user={this.state.user} 
                            skills={this.state.skills} 
                            projects={this.state.projects} 
                            education={this.state.education}
                            experiences={this.state.experiences}
                            accolades={this.state.accolades}
                            alternate="/"  
                            addObj={this.addObjFetchHandler}
                            editObj={this.editObjFetchHandler}
                            deleteObj={this.deleteObjFetchHandler}
                        
                          />}
          />
          <Route 
            path="/portfolio/:id" 
            render={(props) => <PortfolioScreen 
                                  {...props} 
                                  logout={this.logoutHandler}
                                  loggedIn={this.state.loggedIn} 
                                  loggedInUser={this.state.user} 
                                />}
          />
        </Router>
      </div>
    )
  }
}

//portfolio screen will take prop and use this.props.match.params.id to send fetch request for that user id


export default App;
