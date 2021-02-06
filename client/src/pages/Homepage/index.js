import React from 'react';
import Signup from '../Signup'
import Auth from '../../utils/auth';
import PetList from '../../components/PetList';
import UserInfo from '../../components/UserInfo';
import './index.css';


function Homepage() {

  //conditionally render signup page
  function showSignup() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <div className="AddPetSection">
            <UserInfo />
            <PetList />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Signup />
        </div>
      );
    }
  }

  return (
    <div>
      {showSignup()}
    </div>
  );

}

export default Homepage;
