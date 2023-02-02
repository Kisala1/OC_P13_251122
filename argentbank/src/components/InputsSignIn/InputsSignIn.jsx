import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './InputsSignIn.module.scss';

/**
 *
 * @returns
 */

// source : https://contactmentor.com/login-form-react-js-code/

export function InputsSignIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const error = 'Invalid email or password';

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = JSON.stringify({ email, password });

    fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      body: data,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem('token', result.body.token);
        setIsSubmitted(true);
      })
      .catch(() => setErrorMessages(true));
  };

  // Generate JSX code for error message
  const renderErrorMessage = (error) => {
    if (errorMessages) {
      return <div className={styles.error}>{error}</div>;
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label>Email</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className={styles.inputWrapper}>
          <label>Password</label>
          <input type="password" name="pass" id="password" required />
        </div>
        {renderErrorMessage(error)}
        <div className={styles.inputRemember}>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <input
          type="submit"
          value={'Sign in'}
          className={styles.signInButton}
        />
      </form>
    </div>
  );

  return (
    <>{isSubmitted ? <Navigate to={'/User'} replace={true} /> : renderForm}</>
  );
}
