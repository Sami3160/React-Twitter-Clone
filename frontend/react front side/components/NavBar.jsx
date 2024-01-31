
import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
const NavBar = () => {
  return <div className='navbar'>

    <nav className="navigation">
      <div className='upperLink'>
      <Link to={'#x'}>
      <div className='linkItem'>
        <img height={32} width={32} src="../images/x.png" />
      </div>
      </Link>
      </div>


      <div className='upperLink'>
      <Link to={'#home'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/home.png" /> <div className='heading1' style={{fontWeight:"bold"}}>Home</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#explore'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/explore.png" /> <div className='heading1'>Explore</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#notification'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/notification.png" /> <div className='heading1'>Notification</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#message'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/message.png" /> <div className='heading1'>Message</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#profile'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/profile.png" /> <div className='heading1'>Profile</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#profile'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/profile.png" /> <div className='heading1'>Profile</div>
      </div>
      </Link>
      </div>

      <div className="upperLink">

      <Link to={'#profile'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/profile.png" /> <div className='heading1'>Profile</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#more'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/more.png" /> <div className='heading1'>More</div>
      </div>
      </Link>
      </div>
    </nav>
  </div>
  
};

export default NavBar;
