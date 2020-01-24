import React, { Component } from 'react'


export class PortfolioUserContainer extends Component {

    
    render() {
        const {name, email_address, avatar_url, background_url, template} = this.props.user
        return (
            <div className='card' style={style.bio_card}>
                {/* <div className='row'>/ */}
                <img className='card-img' src={background_url} alt='Card Image' style={style.background_img}/>
                <div className='card-body row justify-content-center'>
                        {/* <p><a href={email_address} alt='email address'>{email_address}</a></p> */}
                </div>
                <div className='card-body row justify-content-center'>
                        <h3>{name}</h3>
                </div>
                <div className='card-body row justify-content-center'>
                        <a href={email_address} alt='email address'>Email Me</a>
                        <p></p>
                </div>
                    <div className='card-img-overlay position-relatives align-self-center' style={style.avatar_div}>
                        <img src={avatar_url} className='mx-auto d-block position-inherit align-self-center' width='350px' style={style.avatar}/>
                    </div>                 

                {/* </div> */}
            </div>
        )
    }
}

const style = {
    avatar: {
        maxHeight: '350px',
        borderRadius: 500,
        maxWidth: '350px'
    },
    avatar_div: {
        paddingTop: '100px'
    },
    background_img: {
        maxHeight: '400px'
    },
    bio_card: {
        marginBottom: '50px'
    }
}



export default PortfolioUserContainer
