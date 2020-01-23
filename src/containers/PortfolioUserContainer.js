import React, { Component } from 'react'


export class PortfolioUserContainer extends Component {

    
    render() {
        return (
            <div>
               {this.props.user.id}
            </div>
        )
    }
}

export default PortfolioUserContainer
