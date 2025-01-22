import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const enterEmail = (e) => {
    setEmail(e.target.value);
  };

  const enterPassword = (e) => {
    setPassword(e.target.value);
  };

  const requestLogin = () => {
    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json', // Specify JSON content type
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.login == "success"){
          navigate('/');
        }
      });
  };
  return (
    <div className={styles.login_container}>
      <span className={styles.login_title}>Email</span>
      <input
        className={styles.login_input}
        type='text'
        onChange={enterEmail}
        value={email}
      />
      <span className={styles.login_password}>Password</span>
      <input
        className={styles.login_input}
        type='password'
        onChange={enterPassword}
        value={password}
      />
      <span className={styles.login_submit} onClick={requestLogin}>
        Submit
      </span>
    </div>
  );
};

export default Login;
