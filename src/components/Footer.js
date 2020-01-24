import logo from '../images/logo2.png'
import React from 'react'

function Footer() {
    return (
        <div>
            <footer style={styles.footer}>
            <h5></h5>
            <img src={logo} style={styles.footerLogo} ></img>
        </footer>
        </div>
    )
}

export default Footer


const styles = {
    footer: {
        backgroundColor: '#12cad6',
        height: 60,
        width: '100%'
    },
    footerLogo: {
        width: 50,
        text_align: 'left'
    }
}