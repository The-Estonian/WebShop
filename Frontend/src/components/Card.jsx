/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ setActiveItem, showItemsSwitch, item }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const switchCardOpen = () => {
    showItemsSwitch();
    setCardOpen(!cardOpen);
    setActiveItem(item);
  };
  return (
    <div onClick={switchCardOpen} className={styles.product}>
      {!cardOpen && <img className={styles.product_img} src={item.image} />}
    </div>
  );
};

export default Card;
