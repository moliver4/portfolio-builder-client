import React, { Component } from 'react'
import logo from '../images/logo2.png'
import { Link } from 'react-router-dom'



export default class NavBar extends Component {

    
    

    viewPortfolio = (portfolio) => {
        
        if (portfolio) {
            return (
                <Link to='/edit'>
                    <button type="button" class="btn btn-outline-light" >
                    Edit Portfolio
                    </button>
                </Link>
            )

        } else {
            let portfolioLink = `/portfolio/${this.props.user.id}`
            return (
                    <Link to={portfolioLink}>
                        <button type="button" class="btn btn-outline-light" >
                        View My Portfolio
                        </button>
                    </Link>
                )
        }
    }

    render() {
        return (

            <nav class="navbar sticky-top navbar-light" style={style}>
                <a class="navbar-brand" href="#">
                    <img src={logo} width="35" height="35" alt="" class="d-inline-block align-top"/>
                    <text style={textcolor}> Portfolio Builder Lite </text>
                </a>
                <span>
                {this.viewPortfolio(this.props.portfolio)}
                <Link to="/">
                    <button type="button" class="btn btn-outline-light" onClick={this.props.logout}>
                        Logout 
                    </button>
                </Link>
                </span>
            </nav>
        )
    }
}

const style = {
    backgroundColor: '#12cad6'
}

const textcolor = {
    color: '#ffffff'
}
