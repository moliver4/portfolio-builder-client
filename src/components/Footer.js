import logo from '../images/logo2.png'
import dinosoftlabs from '../images/dinosoftlabs.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer style={styles.footer}>
            <div className="container text-center">
                <div className="row" style={styles.body}>
                    <div className="col">
                        <h6 style={styles.projectRepo} style={styles.textcolor}>See Our Code:</h6>
                        <a href='https://github.com/moliver4/portfolio-builder-client'>
                            <h5 className="btn btn-outline-light">Client</h5>
                        </a>
                        <a href='https://github.com/devincloudkelly/portfolio-builder-backend'>
                            <h5 className="btn btn-outline-light">Server</h5>
                        </a>
                    </div>

                    <div className="col">
                        <p style={styles.textcolor}>Created By:</p>
                                <a className="btn btn-outline-light" href='https://github.com/moliver4'>Tiffany Tang</a>
                                <a className="btn btn-outline-light" href='https://github.com/devincloudkelly'>Devin Kelly</a>
                                <a className="btn btn-outline-light" href='https://github.com/Clashbuster'>Taylor Coon</a>
                                <a className="btn btn-outline-light" href='https://github.com/learn-co-kat'>Katrina Reinsdorff</a>

                    </div>
                    <div className="col">
                    <Link to="/" href="#home">
                        <button type="button" className="btn btn-outline-light">
                            Build Your Own Portfolio 
                        </button>
                    </Link>
                    </div>

                </div>
                <div className="row">
                    <div className='col-md'> 
                        <br></br>
                        Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

const styles = {
    footer: {
        backgroundColor: '#111111',
        height: 'auto',
        width: 'auto',
        marginTop: 60,
        padding: 20,
        text_align: 'center'
    },
    footerLogo: {
        width: 70,
        text_align: 'left',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20
    },
    projectRepo: {
        text_align: 'center'
    },
    textcolor: {
        color: '#ffffff'
    },
    dino: {
        borderRadius: 15,
        width: 30
    },
    body: {
        justifyContent: 'space-between'
    },
    middleCol: {
        marginLeft: 40,
        marginRight: 40
    },
    dinomargin: {
        marginTop: 15
    }
}