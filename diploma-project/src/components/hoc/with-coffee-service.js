import React from 'react';
import CoffeeServiceContext from '../service-context';

const WithCoffeeService = () => (Wrapped) => {
    return (props) => {
        return (
            <CoffeeServiceContext.Consumer >
                {
                    (CoffeeService) => {
                        return <Wrapped coffeeService={CoffeeService} {...props} />
                    }
                }
            </CoffeeServiceContext.Consumer>
        )
    }
}

export default WithCoffeeService;