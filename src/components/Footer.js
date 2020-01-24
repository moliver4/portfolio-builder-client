import logo from '../images/logo2.png'
import React from 'react'

function Footer() {
    return (
        <footer style={styles.footer}>
            <h5></h5>
            <img src={logo} style={styles.footerLogo} ></img>
        </footer>
    )
}

export default Footer

const styles = {
    footer: {
        backgroundColor: '#12cad6',
        height: 110,
        width: '100%'
    },
    footerLogo: {
        width: 70,
        text_align: 'left',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20
    }
}