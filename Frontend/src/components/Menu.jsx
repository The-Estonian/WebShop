import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import styles from './Menu.module.css';

const Menu = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/status', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.auth == 'success') {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
  }, [location]);

  const logOut = () => {
    setLoggedIn(false);
    fetch('http://localhost:8080/api/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.logout == 'success') {
          setLoggedIn(false);
          navigate('/login');
        }
      });
  };

  return (
    <div className={styles.menu}>
      <span className={styles.buttons}>
        <NavLink className={styles.button_link} to='/'>
          Products
        </NavLink>
      </span>
      {loggedIn && (
        <span className={styles.buttons}>
          <NavLink className={styles.button_link} to='/profile'>
            Profile
          </NavLink>
        </span>
      )}
      {!loggedIn && (
        <span className={styles.buttons}>
          <NavLink className={styles.button_link} to='/login'>
            Login
          </NavLink>
        </span>
      )}
      {!loggedIn && (
        <span className={styles.buttons}>
          <NavLink className={styles.button_link} to='/register'>
            Register
          </NavLink>
        </span>
      )}
      {loggedIn && (
        <span className={styles.buttons}>
          <NavLink className={styles.button_link} onClick={logOut} to='/'>
            Logout
          </NavLink>
        </span>
      )}
    </div>
  );
};

export default Menu;
