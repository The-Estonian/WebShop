import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => {
        setItemList(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {itemList?.map((item, index) => {
        return (
          <div className={styles.product} key={index}>
            <img className={styles.product_img} src={item.image} />
            <div className={styles.product_info}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
