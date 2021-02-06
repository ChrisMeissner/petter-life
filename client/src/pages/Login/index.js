import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link, useHistory } from "react-router-dom";
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth";
import './index.css';
import { useStoreContext } from '../../utils/GlobalState'

function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);
<<<<<<< HEAD
  const { globalStore, dispatch } = useStoreContext()
  const history = useHistory()
=======
  const { globalStore, dispatch } = useStoreContext();
  const history = useHistory();
>>>>>>> master
  console.log(globalStore, dispatch);
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { username: formState.username, password: formState.password } })
      const token = mutationResponse.data.login.token;
<<<<<<< HEAD
      // console.log(mutationResponse.data.login);
=======
>>>>>>> master
      dispatch({
        type: "LOGIN",
        payload: mutationResponse.data.login.user
      })
      Auth.login(token);
      history.push("/")
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="LoginSection">
      <div className="LoginContainer">
        <div className="LoginTitle">Login</div>
        <form className="LoginCredentials" onSubmit={handleFormSubmit}>
          <div className="LoginUsername">
            <label htmlFor="username">username</label>
            <input 
              className="LoginUsernameInputField" 
              id="username" 
              name="username" 
              type="input" 
              onChange={handleChange}
            />
          </div>
          <div className="LoginPassword">
            <label htmlFor="password">password</label>
            <input 
              className="LoginPasswordInputField" 
              id="pwd" 
              name="password" 
              type="password" 
              onChange={handleChange} 
            />
          </div>
          {
            error ? <div>
              <p>Your credentials are incorrect</p>
            </div> : null
          }
          <button className="LoginBtn" type="submit">Submit</button>
          <Link className="SignupLink" to="/signup">Signup Instead</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;