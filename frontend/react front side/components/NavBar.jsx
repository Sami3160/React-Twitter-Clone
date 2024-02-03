
import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
const NavBar = () => {
  return <div className='navbar overflow-auto'>

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
        <img height={32} width={32}  src="../images/home.png" /> <div className='heading1 mx-2' style={{fontWeight:"bold"}}>Home</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#explore'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/explore.png" /> <div className='heading1 mx-2'>Explore</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#notification'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/notification.png" /> <div className='heading1 mx-2'>Notification</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#message'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/message.png" /> <div className='heading1 mx-2'>Message</div>
      </div>
      </Link>
      </div>


      <div className="upperLink hidden lg:block">

      <Link to={'#profile'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/grok.png" /> <div className='heading1 mx-2'>Grok</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#profile'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/list.png" /> <div className='heading1 mx-2'>Lists</div>
      </div>
      </Link>
      </div>


        <div className="upperLink hidden xl:block ">
          <Link to={'#profile'}>
            <div className='linkItem'>
              <img height={32} width={32} style={{marginRight:"4px"}} src="../images/x.png" /> <div className='heading1 mx-2'>Premium</div>
            </div>
          </Link>
        </div>

      <div className="upperLink">

      <Link to={'#profile'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/profile.png" /> <div className='heading1 mx-2'>Profile</div>
      </div>
      </Link>
      </div>


      <div className="upperLink">

      <Link to={'#more'}>
      <div className='linkItem'>
        <img height={32} width={32} style={{marginRight:"4px"}} src="../images/more.png" /> <div className='heading1 mx-2'>More</div>
      </div>
      </Link>
      </div>

      <div className=''>
      <Link to={'#tweet'}>
        <div className='post '>
          <button>Post</button>
        </div>
      </Link> 
      </div>
    </nav>
  </div>
  
};

export default NavBar;
