import React from 'react';
import styles from './index.module.scss';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartWrapper}>
        <div className={styles.container}>
          <div className={styles.cartTitle}>
            <h1>кошик</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'>
              <rect
                x='14.2222'
                width='2.51415'
                height='20.1132'
                rx='1.25707'
                transform='rotate(45 14.2222 0)'
                fill='#17110D'
              />
              <rect
                y='1.77734'
                width='2.51415'
                height='20.1132'
                rx='1.25707'
                transform='rotate(-45 0 1.77734)'
                fill='#17110D'
              />
            </svg>
          </div>
          <div className={styles.info}>
            <h4 className={styles.infoProduct}>Продукт</h4>
            <h4 className={styles.infoPrice}>Ціна</h4>
            <h4 className={styles.infoCount}>Кількість</h4>
            <h4 className={styles.infoSum}>Всього</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
