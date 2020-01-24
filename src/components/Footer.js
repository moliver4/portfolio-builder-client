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
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h6 style={styles.projectRepo} style={styles.textcolor}>Download Portfolio Builer Lite</h6>
                        <h5 className="btn btn-outline-light">front-end repo</h5>
                        <h5 className="btn btn-outline-light">back-end repo</h5>
                    </div>
                    <div className="col-sm">
                        <p style={styles.textcolor}>Created by</p>
                                <a className="btn btn-outline-light" style={styles.textcolor} href=''>Tiffany Tang</a>
                                <a className="btn btn-outline-light" style={styles.textcolor} href=''>Devin Kelly</a>
                                <a className="btn btn-outline-light" style={styles.textcolor} href=''>Taylor Coon</a>
                                <a className="btn btn-outline-light" style={styles.textcolor} href=''>Katrina Reinsdorff</a>
                    </div>
                    <div className="col-sm">
                        <p style={styles.textcolor}>Logo credit</p>
                        <img src={dinosoftlabs} style={styles.dino} href='https://www.flaticon.com/authors/dinosoftlabs'></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
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
        padding: 20
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
    }
}