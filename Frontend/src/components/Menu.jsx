import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.css';

const Menu = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.menu}>
      <span className={styles.buttons}>
        <NavLink className={styles.button_link} to='/'>Products</NavLink>
      </span>
      {loggedIn && (
        <span className={styles.buttons}>
          <NavLink className={styles.button_link} to='/profile'>Profile</NavLink>
        </span>
      )}
      {!loggedIn && (
        <span className={styles.buttons}>
          <NavLink className={styles.button_link} to='/login'>Login</NavLink>
        </span>
      )}
      {loggedIn && (
        <span className={styles.buttons}>
          <NavLink className={styles.button_link} to='/'>Logout</NavLink>
        </span>
      )}
    </div>
  );
  // return (
  //   <div className={styles.menu}>
  //     <span className={styles.buttons}>Products</span>
  //     {loggedIn && <span className={styles.buttons}>Profile</span>}
  //     {!loggedIn && <span className={styles.buttons}>Login</span>}
  //     {loggedIn && <span className={styles.buttons}>Logout</span>}
  //   </div>
  // );
};

export default Menu;
