import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
      
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon"/>
      </IconButton>

      <img
        className="header__logo"
        src="https://p.kindpng.com/picc/s/19-195266_tinder-icon-2017-logo-vector-gradient-tinder-logo.png" alt="Logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
      
    </div>
  )
}

export default Header
