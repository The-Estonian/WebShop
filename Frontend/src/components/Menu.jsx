import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';



import styles from './Menu.module.css';

let LOGGEDIN = true;

const Menu = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // check login
    if (LOGGEDIN) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [location]);

  const logOut = () => {
    LOGGEDIN = false;
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
