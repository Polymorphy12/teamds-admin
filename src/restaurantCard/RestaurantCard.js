import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './RestaurantCard.css';

const RestaurantCard = (props) => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>[평양식 랍스터집]</Card.Header>
      <Card.Meta>
        <span className='date'>[YYYY-MM-DD에 수정됨]</span>
      </Card.Meta>
      <Card.Description>
        <div className='restaurantOwnerAndNumber'>
            <p>[대표 : 김막례]</p>
            <p>[전화번호 : 070-7979-5959]</p>
        </div>
        
      </Card.Description>
    </Card.Content>
  </Card>
)

export default RestaurantCard;