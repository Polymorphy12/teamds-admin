import React, {Component} from 'react';
import ServiceContainer from './serviceContainer';
import {Container, Divider, Segment} from 'semantic-ui-react'

class RestaurantContainer extends Component{

    render(){
        return(
            
            <Segment>
                <ServiceContainer isOnService={true} />
                {/* <Divider horizontal>or</Divider> */}
                <ServiceContainer/>
            </Segment>
        );
    }
}

export default RestaurantContainer;