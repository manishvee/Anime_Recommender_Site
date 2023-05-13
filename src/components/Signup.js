import React from 'react';

import styles from './Signup.module.css'

const SignupForm = () => {

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1 className={styles.Signup.module.css}>Signup Form</h1>
      <a href="#" onClick={handleLoginClick}>Switch to Login</a>
    </div>
   
   

  );
};

export default SignupForm;