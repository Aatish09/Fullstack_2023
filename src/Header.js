import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom"

function Header() {
  const navigateToLogin = () => {
    window.location.href = '/login'; // Navigate to the login page
  };

  return (
    <div className='header'>
      <div className='header_left'>
        <div className='menu_icon'>
          <MenuIcon />
        </div>
        <div className='header_logo'>
          <Link to="/">
          <img
            src='https://static.vecteezy.com/system/resources/previews/002/104/166/original/video-play-neon-icon-for-website-and-ui-material-illustration-vector.jpg'
            alt='youtube logo'
            className='logo_image'
          />
          </Link>
          <div className='logo_text'>AKTube</div>
        </div>
      </div>
      <div className='header_input'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header_inputbutton' />
      </div>
      <div className='header_right'>
        <VideoCallIcon className='header_icon' />
        <AppsIcon className='header_icon' />
        <NotificationsIcon className='header_icon' />
        <a href='/login' className='header_icon' onClick={navigateToLogin}>
          <AccountCircleIcon />
        </a>
      </div>
    </div>
  );
}

export default Header;
