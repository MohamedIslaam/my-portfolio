import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='herocont' id="hero">
      <div className="leftcont">
        <h1>Hi There,</h1>
        <p>I am Mohamed <span>Islaam</span></p>
        <p className="year">Final year student</p>
        <a href="#about" className="abt">About me</a>
        <ul>
          <li><a href="https://www.instagram.com/mhd_islaam?igsh=aTZpem1pNDhyZGhv" target="_blank" rel="noopener noreferrer"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/a3a3a3/instagram-new--v1.png" alt="instagram-new" /></a></li>
          <li><a href="http://linkedin.com/in/mohamed-islaam-5883b4255/" target="_blank" rel="noopener noreferrer"><img width="48" height="48" src="https://img.icons8.com/ios-glyphs/48/a3a3a3/linkedin.png" alt="linkedin" /></a></li>
          <li><a href="https://github.com/MohamedIslaam" target="_blank" rel="noopener noreferrer"><img width="48" height="48" src="https://img.icons8.com/ios-glyphs/48/a3a3a3/github.png" alt="github" /></a></li>
        </ul>
      </div>

      <div className="rightcont">
        <img src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-92212.jpg" className="img" alt="" />
      </div>
    </div>
  );
}

export default Hero;
