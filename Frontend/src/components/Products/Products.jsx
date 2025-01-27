import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

import styles from './Products.module.css';

const Products = ({ setCartItems }) => {
  const [itemList, setItemList] = useState([]);
  const [itemInfo, setItemInfo] = useState({});
  const [showItems, setShowItems] = useState(true);

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

  const addToCartTrigger = () => {
    setCartItems((prev) => [...prev, itemInfo]);
  };

  const setActiveItem = (item) => {
    setItemInfo(item);
  };
  return (
    <>
      <div className={styles.productList}>
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
      </div>
      {!showItems && (
        <div className={styles.product_info}>
          <img className={styles.product_img} src={itemInfo.image}></img>
          <div>
            <p>{itemInfo.title}</p>
            <p>{itemInfo.price} EUR</p>
            <p>{itemInfo.description}</p>
            <p>{itemInfo.category}</p>
          </div>
          <span className={styles.buttons} onClick={showItemsSwitch}>
            Back
          </span>
          <span className={styles.buttons} onClick={addToCartTrigger}>
            ADD TO CART
          </span>
        </div>
      )}
    </>
  );
};

Products.propTypes = {
  setCartItems: PropTypes.func.isRequired,
};

export default Products;
