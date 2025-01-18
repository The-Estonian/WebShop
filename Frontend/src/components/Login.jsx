import { useState } from 'react';

import styles from './Login.module.css';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const enterLogin = (e) => {
    setLogin(e.target.value);
  };

  const enterPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={styles.login_container}>
      <span className={styles.login_title}>Login</span>
      <input
        className={styles.login_input}
        type='text'
        onChange={enterLogin}
        value={login}
      />
      <span className={styles.login_password}>Password</span>
      <input
        className={styles.login_input}
        type='password'
        onChange={enterPassword}
        value={password}
      />
      <span className={styles.login_submit}>Submit</span>
    </div>
  );
};

export default Login;
