import React from 'react';
import onlineIcon from '../../icons/onlineIcon';
import closeIcon from '../../icons/closeIcon';

const Infobar = ({ room }) => (
  <div className='infoBar'>
    <div className='leftInnerContainer'>
      <img className='onLineIcon' src={onlineIcon} alt='Online' />
      <h3>{room}</h3>
    </div>
    <div className='rightInnerContainer'>
      <a href='/'>
        <img src={closeIcon} alt='closeIcon' />
      </a>
    </div>
  </div>
);

export default Infobar;
