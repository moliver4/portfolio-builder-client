import React, { Component } from 'react'


export class PortfolioUserContainer extends Component {

    
    render() {
        const {id, name, email_address, avatar_url, background_url, template} = this.props.user
        return (
            <div className='card'>
                {/* <div className='row'> */}
                <img className='card-img' src={background_url} alt='Card Image'/>
                <div className='card-body'>
                        <h3>{name}</h3>
                        <a href={email_address} alt='email address'>{email_address}</a>
                </div>

                    <div className='card-img-overlay position-relative'>
                        <img src={avatar_url} className='mx-auto d-block position-relative' width='300px' style={style.avatar}/>
                    </div>                 
                {/* </div> */}
            </div>
        )
    }
}

const style = {
    avatar: {
        maxHeight: '300px',
        borderRadius: 500,
        maxWidth: '300px'
    },
    avatar_div: {
        // paddingTop: '28%',
        paddingBottom: '50px',

    }
}



export default PortfolioUserContainer
