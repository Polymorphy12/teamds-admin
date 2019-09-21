import React, {Component} from 'react';
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
          <button id='userInfoUpdate'>개인정보 수정</button>
        </div>
      </div>
    );
}
  
export default Header;
  