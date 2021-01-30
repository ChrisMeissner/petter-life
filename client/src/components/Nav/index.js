import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './index.css';

function Nav() {
  
  //function to conditionally render nav bar depeneding on user's login status
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/savedpets">
              Saved Pets
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  
  // return (
  //   <div className="NavContainer">
  //     <li className="NavBox">
  //       <a>Get Pet</a>
  //     </li>
  //     <li className="NavBox">
  //       <a>Give Pet</a>
  //     </li>
  //     <li className="NavBox">
  //       <a>Store</a>
  //     </li>
  //   </div>
  // );


  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="dog emoji">🐕</span>
          A Petter Life
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;