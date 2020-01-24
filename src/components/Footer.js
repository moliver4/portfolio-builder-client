import logo from '../images/logo2.png'
import dinosoftlabs from '../images/dinosoftlabs.jpg'
import React from 'react'

// Created by: names... (links to github )
// front-end & back repo links
// credit to logo peeps
// <img className="d-inline-block align-left" src={logo} style={styles.footerLogo} ></img>

function Footer() {
    return (
        <footer style={styles.footer}>
            <div className="container text-center">
                <div className="row" style={styles.body}>
                    <div className="col">
                        <h6 style={styles.projectRepo} style={styles.textcolor}>Download Portfolio Builder Lite</h6>
                        <a href='https://github.com/moliver4/portfolio-builder-client'>
                            <h5 className="btn btn-outline-light">Client</h5>
                        </a>
                        <a href='https://github.com/devincloudkelly/portfolio-builder-backend'>
                            <h5 className="btn btn-outline-light">Server</h5>
                        </a>
                    </div>
                    <div className="col">
                        <p style={styles.textcolor}>Created by</p>
                                <a className="btn btn-outline-light" href='https://github.com/moliver4'>Tiffany Tang</a>
                                <a className="btn btn-outline-light" href='https://github.com/devincloudkelly'>Devin Kelly</a>
                                <a className="btn btn-outline-light" href='https://github.com/Clashbuster'>Taylor Coon</a>
                                <a className="btn btn-outline-light" href='https://github.com/learn-co-kat'>Katrina Reinsdorff</a>
                    </div>
                    <div className="col">
                        <p style={styles.textcolor}>Logo credit</p>
                        <a href='https://www.flaticon.com/authors/dinosoftlabs'>
                            <img src={dinosoftlabs} style={styles.dino} ></img>
                        </a>
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
        width: 55
    },
    body: {
        justifyContent: 'space-between'
    },
    middleCol: {
        marginLeft: 40,
        marginRight: 40
    }
}