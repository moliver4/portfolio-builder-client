import logo from '../images/logo2.png'
import React from 'react'

// Created by: names... (links to github )
// front-end & back repo links
// credit to logo peeps

function Footer() {
    return (
        <footer style={styles.footer}>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img src={logo} style={styles.footerLogo} ></img>
                    </div>
                    <div class="col-sm">
                        <h6 style={styles.projectRepo}>Download our front-end / back-end repository</h6>
                            <div>
                                <p>Created by:</p>
                                <a href=''>Tiffany Tang</a>
                                <a href=''>Devin Kelly</a>
                                <a href=''>Taylor Coon</a>
                                <a href=''>Katrina Reinsdorff</a>
                            </div>
                    </div>
                    <div class="col-sm">
                        <a href='https://www.flaticon.com/authors/dinosoftlabs'>Logo credit: DinosoftLabs</a>
                    </div>
                </div>
                </div>

            


            

        </footer>
    )
}

export default Footer

const styles = {
    footer: {
        backgroundColor: '#12cad6',
        height: 110,
        width: '100%',
        marginTop: 60
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
    }
}