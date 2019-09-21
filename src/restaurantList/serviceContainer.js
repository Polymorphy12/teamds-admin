import React, {Component} from 'react';
import {Container, Segment, Card} from 'semantic-ui-react';
import  ExampleCard from './exampleCard';
class ServiceContainer extends Component{
    render(){
        return( 
            <Segment>
                <p>업체 목록</p>
                <Card.Group>
                    <ExampleCard></ExampleCard>
                    <ExampleCard></ExampleCard>
                    <ExampleCard></ExampleCard>
                    <ExampleCard></ExampleCard>
                </Card.Group>
            </Segment>
        );
    }
}

export default ServiceContainer;