import React from 'react'
import video from '../assets/videoplayback.mp4'
import '../components/Brandvid.css';
import playstorepic from '../assets/playstore.png'
import applestorepic from '../assets/applestorepic.png'


 

const Brandvid = () => {
  return (
    <div className="brandvid-container">
      <video
        className="brandvid-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="brandvid-content">
        <h1>Speed</h1>
        <h2>India’s #1 food delivery app</h2>
        <p>Experience fast & easy online ordering<br />on the Speed app</p>
        <div className="brandvid-buttons">
          <a href="#"><img src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="Get it on Google Play" /></a>
          <a href="#"><img src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png" alt="Download on the App Store" /></a>
        </div>
      </div>
    </div>
  );
};

export default Brandvid;
