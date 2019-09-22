import React, {Component} from 'react';
import ServiceContainer from './serviceContainer';
import {Container, Divider, Segment} from 'semantic-ui-react'

class RestaurantContainer extends Component{
    
    
    render(){
        var onService =[];
        var notOnService = [];

        for(var i = 0; i < 10; i++)
        {
            var obj = {
                restaurantName : '음식점'+i
            };
            
            if(i%2 ==0){
                onService.push(obj);
            }
            else{
                notOnService.push(obj);
            }
        }
        
        console.log(onService, notOnService);
        return(
            <Segment>
                <ServiceContainer isOnService={true} restaurantInfo={onService} />
                {/* <Divider horizontal>or</Divider> */}
                <ServiceContainer isOnService={false} restaurantInfo={notOnService}/>
            </Segment>
        );
    }
}

export default RestaurantContainer;