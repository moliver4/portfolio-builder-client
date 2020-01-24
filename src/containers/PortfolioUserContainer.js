import React, { Component } from 'react'


export class PortfolioUserContainer extends Component {

    
    render() {
        const {id, name, email_address, avatar_url, background_url, template} = this.props.user
        return (
            <div className='card'>
                {/* <div className='row'>/ */}
                <img className='card-img' src={background_url} alt='Card Image' style={style.background_img}/>
                <div className='card-body'>
                        <h3 className='align-self-center'>{name}</h3>
                        <a href={email_address} alt='email address'>{email_address}</a>
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
    }
}



export default PortfolioUserContainer
