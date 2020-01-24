import React, { Component } from 'react'
import logo from '../images/logo2.png'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    viewPortfolio = (portfolio) => {
        
        if (portfolio) {
            return (
                <Link to='/edit'>
                    <button type="button" className="btn btn-outline-light" style={styles.button}  >
                    Edit Portfolio
                    </button>
                </Link>
            )

        } else {
            let portfolioLink = `/portfolio/${this.props.user.id}`
            return (
                    <Link to={portfolioLink}>
                        <button type="button" className="btn btn-outline-light" style={styles.button} >
                        View My Portfolio
                        </button>
                    </Link>
                )
        }
    }

    render() {
        return (
            <nav className="navbar sticky-top navbar-light" style={styles.navbar}>
                <a className="navbar-brand" href="#">
                    <img src={logo} width="35" height="35" alt="logo" className="d-inline-block align-top"/>
                    <text style={styles.textcolor}> Portfolio Builder Lite </text>
                </a>
                <span>
                {this.viewPortfolio(this.props.portfolio)}
                <Link to="/" href="#home">
                    <button type="button" className="btn btn-outline-light" style={styles.button} onClick={this.props.logout}>
                        Logout 
                    </button>
                </Link>
                </span>
            </nav>
        )
    }
}

const styles = {
    navbar: {
        backgroundColor: '#0fabbc'
    },
    textcolor: {
        color: '#ffffff'
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRIght: 5
    }
}
