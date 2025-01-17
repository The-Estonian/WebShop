import { useState, useEffect } from 'react';

import styles from './Menu.module.css';

const Menu = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.menu}>
      <span className={styles.buttons}>Products</span>
      {loggedIn && <span className={styles.buttons}>Profile</span>}
      {!loggedIn && <span className={styles.buttons}>Login</span>}
      {loggedIn && <span className={styles.buttons}>Logout</span>}
    </div>
  );
};

export default Menu;
