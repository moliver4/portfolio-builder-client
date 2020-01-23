import React from 'react';
import Loader from './Loader'


const PortfolioHOC = WrappedComponent => {
    return class PortfolioHOC extends React.Component {

        isLoading = () => {
 
            return (!!this.props.user.id)
        }

        render() {
 
            return this.isLoading()?<Loader />:<WrappedComponent {...this.props}/>
        }
    }
}

export default PortfolioHOC