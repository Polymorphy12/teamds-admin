import React, {Component} from 'react';
import {Container, Segment, Card} from 'semantic-ui-react';
import  ExampleCard from './exampleCard';
class ServiceContainer extends Component{
    render(){

        
        console.log(this.props.restaurantInfo);

        if(this.props.isOnService)
        {
            return( 
                <Segment>
                    <p>서비스 중</p>
                    <Card.Group>
                        {
                            this.props.restaurantInfo.map((restaurant, i ) => {
                                return(<ExampleCard restaurantName={restaurant.restaurantName} key={i}></ExampleCard>)
                            })
                        }
                        
                    </Card.Group>
                </Segment>
            );
        }
        else{
            return(
                <Segment>
                    <p>서비스 대기</p>
                    <Card.Group>
                    {
                        this.props.restaurantInfo.map((restaurant, i ) => {
                            return(<ExampleCard restaurantName={restaurant.restaurantName} key={i}></ExampleCard>)
                        })
                    }
                    </Card.Group>
                </Segment>
            );
        }
        
    }
}

export default ServiceContainer;