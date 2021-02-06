import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import './index.css';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const history = useHistory();

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username, email: formState.email, password: formState.password
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    history.push('/login');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  return (
    <div className="SignupSection">
      <div className="SignupContainer">
        <div className="SignupTitle">Signup</div>
        <form className="SignupCredentials" onSubmit={handleFormSubmit}>
          <div className="SignupUsername">
            <label htmlFor="username">username</label>
            <input 
              className="SignupUsernameInputField" 
              name="username" 
              type="input" 
              onChange={handleChange}
            />
          </div>
          <div className="SignupEmail">
            <label htmlFor="email">email</label>
            <input className="SignupEmailInputField" name="email" type="email" onChange={handleChange}></input>
          </div>
          <div className="SignupPassword">
            <label htmlFor="password">password</label>
            <input 
              className="SignupPasswordInputField" 
              name="password" 
              type="password" 
              onChange={handleChange}
            />
          </div>
          <button className="SignupBtn" type="submit">Submit</button>
        </form> 
        <Link className="LoginLink" to="/login">Login Instead</Link>
      </div>
    </div>
  );
}

export default Signup;