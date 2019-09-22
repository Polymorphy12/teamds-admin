import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './Header.css';

function Header(props) {
    return (
      <div className='NavHeader'>
        <span id='headerTitle'>학식탈출 관리자 페이지</span>
        <div className='userInfoArea'>
          <div className="userInfo">
            <p id='userName'>김동훈</p>
            <p id='userID'>klklklad</p>
          </div>
          <Button animated='fade' className='userInfoUpdate'>
            <Button.Content visible>개인정보 수정</Button.Content>
            <Button.Content hidden>
              <Icon name='pencil' />
            </Button.Content>
          </Button>
        </div>
      </div>
    );
}
  
export default Header;
  