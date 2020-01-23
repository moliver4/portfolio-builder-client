import React, { Component } from 'react'
import logo from '../images/logo4.png'
import { Link } from 'react-router-dom'
import { whileStatement } from '@babel/types'


const style = {
    backgroundColor: '#12cad6'
}

const textcolor = {
    color: '#ffffff'
}

export default class NavBar extends Component {

    
    

    viewPortfolio = (thing) => {
        
        if (thing) {
            let portfolioLink = `/portfolio/${this.props.user.id}`
            return (<Link to={portfolioLink}>
                        <button type="button" class="btn btn-outline-light" >
                        View My Portfolio
                        </button>
                    </Link>)
        }
    }
//FIX PORTFOLIO SHIT
    render() {
        return (

            <nav class="navbar sticky-top navbar-light" style={style}>
                <a class="navbar-brand" href="#">
                    <img src={logo} width="35" height="35" alt="" class="d-inline-block align-top"/>
                    <text style={textcolor}> Portfolio Builder Lite </text>
                </a>
                <span>
                {this.viewPortfolio(this.props.user)}
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

