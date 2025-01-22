import { useEffect, useState } from 'react';

import styles from './Profile.module.css';

const Profile = () => {
  const [userData, setUserData] = useState('');
  useEffect(() => {
    fetch('http://localhost:8080/api/profile', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setUserData(data);
      })
      .catch((error) => console.error('Error fetching profile info:', error));
  }, []);
  return (
    <div className={styles?.profile_container}>
      <span>Email: {userData.email}</span>
      <span>Other future data</span>
    </div>
  );
};

export default Profile;
