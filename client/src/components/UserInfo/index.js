import React from 'react';
import Auth from '../../utils/auth';
import './index.css';
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";

function UserInfo() {

  const { globalStore } = useStoreContext()
  return (
    <div className="UserInfoContainer">

      {globalStore.user === null ? (
        <p></p>
      ) : (
          <div className="UserInfoTitle">Hello, {globalStore.user.username}!</div>
        )}
      <Link to="/savedPets" className="UserInfoSavedPetsBtn">Saved Pets</Link>
      <Link to="/donate" className="UserInfoDonateBtn">Donate</Link>
      <Link to="/about" className="UserInfoAboutBtn">About</Link>
      <Link to="/" className="UserInfoLogoutBtn" onClick={() => Auth.logout()}>Logout</Link>
    </div>
  );
}

export default UserInfo;