import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function Donate() {
  return(
    <div className="DonationSection">
      <div className="DonationContainer">
        <div className="DonationTitle" >Donation Page <br /> Coming Soon!  </div>  
        <Link to="/" className="DonateHomeBtn">Home</Link>
      </div>
    </div>
  )
}

export default Donate;