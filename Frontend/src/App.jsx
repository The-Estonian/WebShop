import { useState, useEffect } from 'react';

import Card from './components/Card';

import styles from './App.module.css';

function App() {
  const [itemList, setItemList] = useState([]);
  const [showItems, setShowItems] = useState(true);
  const [itemInfo, setItemInfo] = useState({});
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => {
        setItemList(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const showItemsSwitch = () => {
    setShowItems(!showItems);
  };

  const setActiveItem = (item) => {
    setItemInfo(item);
  };

  return (
    <>
      {showItems &&
        itemList?.map((item, index) => {
          return (
            <Card
              key={index}
              setActiveItem={setActiveItem}
              showItemsSwitch={showItemsSwitch}
              item={item}
            />
          );
        })}
      {!showItems && (
        <div className={styles.product_info}>
          <img className={styles.product_img} src={itemInfo.image}></img>
          <div>
            <p>{itemInfo.title}</p>
            <p>{itemInfo.price} EUR</p>
            <p>{itemInfo.description}</p>
            <p>{itemInfo.category}</p>
          </div>
          <span className={styles.back} onClick={showItemsSwitch}>
            BACK
          </span>
        </div>
      )}
    </>
  );
}

export default App;
