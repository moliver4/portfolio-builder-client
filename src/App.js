import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen'
import EditScreen from './screens/EditScreen'
import PortfolioScreen from './screens/PortfolioScreen'

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      loggedIn: false,
      user: {
        email_address: ""
      },
      skills: [],
      projects: [],
      education: [],
      experiences: [],
      accolades: []  
    }
  }


  
  //callback fx for login screen will trigger: 
  //toggleLogin
  //fetchUser => setState
  //redirect to edit/user_id page


  render() {
    return (
      <div>
        <Router>
   
          <Route 
            exact path="/" 
            render={()=> <LoginScreen submitLogin={this.loginHandler} user={this.state.user}/>}
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
