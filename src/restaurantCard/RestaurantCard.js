import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import './RestaurantCard.css';

const RestaurantCard = function(props) {
    return (
        <div className='restaurantCard'>
            <Card
                onMouseOver={(e) => {
                    document.getElementById('btn0').style.display='inherit';
                }}
                onMouseOut={(e) => {
                    document.getElementById('btn0').style.display='none';
                }}>
                <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>[평양식 랍스터집]</Card.Header>
                    <Card.Description>
                        <div className='restaurantOwnerAndNumber'>
                            <p>[대표 : 김막례]</p>
                            <p>[전화번호 : 070-7979-5959]</p>
                        </div>
                    </Card.Description>
                    <Card.Meta>
                        <span className='date'>[YYYY-MM-DD에 수정됨]</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
            <Button animated='fade'
                className='addRestaurantButton'
                id='btn0'
                onMouseOver={(e) => {
                    document.getElementsByClassName('ui fade animated button addRestaurantButton')[0].style.display='inherit';
                }}
                onMouseOut={(e) => {
                    document.getElementById('btn0').style.display='none';
                }}>
                <Button.Content visible>+</Button.Content>
                <Button.Content hidden>추가</Button.Content>
            </Button>  
        </div>
    );
}

export default RestaurantCard;