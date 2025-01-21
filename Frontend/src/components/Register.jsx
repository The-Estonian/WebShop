import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Register.module.css';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const enterLogin = (e) => {
    setLogin(e.target.value);
  };

  const enterPassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const enterPassword2 = (e) => {
    setPassword2(e.target.value);
    if (password1 != e.target.value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const requestRegister = () => {
    if (!error) {
      fetch('http://localhost:8080/api/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify({
          login: login,
          password: password1,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.login == 'success') {
            navigate('/');
          }
        });
    } else {
      console.log('Error registering, do the passwords match?');
    }
  };
  return (
    <div className={styles.register_container}>
      <span className={styles.register_title}>Email</span>
      <input
        className={styles.register_input}
        type='text'
        onChange={enterLogin}
        value={login}
      />
      <span className={styles.register_password}>Password</span>
      <input
        className={styles.register_input}
        type='password'
        onChange={enterPassword1}
        value={password1}
      />
      <input
        className={error ? styles.register_input_error : styles.register_input}
        type='password'
        onChange={enterPassword2}
        value={password2}
      />
      <span className={styles.register_submit} onClick={requestRegister}>
        Register
      </span>
    </div>
  );
};

export default Register;
