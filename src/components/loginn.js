import React from 'react'


import styles from "./LoginPage.module.css"

import { useState } from 'react';

const LoginPage = ({login, Setlogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    if (username === 'admin' && password === 'admin') {
      console.log('Login successful');
      Setlogin(true)
      // Redirect the user to the home page or perform any other necessary actions
    } else {
      console.log('Invalid username or password');
      // Display an error message or perform any other necessary actions
    }
  };

    return (
      <div class={styles.loginpage}>
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    );
}
export default LoginPage;