import PropTypes from 'prop-types';

import styles from './Cart.module.css';

import Card from './Card';

const Cart = ({ cartItems }) => {
  return (
    <>
      <span className={styles.cart_title}>Items in Cart:</span>
      <div className={styles.productList}>
        {cartItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
};
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;
