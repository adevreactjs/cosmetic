import React from 'react';
import styles from './index.module.scss';
import CartItem from '../cartItem/CartItem';

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
          <div className={styles.cartItems}>{
            <CartItem/>
          }</div>
          <div className={styles.sum}>
            <h2>Всього:</h2>
            <span>4200</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='34'
              viewBox='0 0 17 34'
              fill='none'>
              <path
                d='M8.54381 27.6417C6.63984 27.6417 5.07581 27.0637 3.91981 25.9417C2.45776 24.5477 1.98187 22.3377 2.72981 20.6377C3.37584 19.1756 4.73584 18.2917 5.72181 17.6457L9.63181 15.1297C10.8218 14.3476 11.9439 13.5657 12.1818 12.5457C12.4198 11.6617 11.9439 10.6077 11.0598 9.99569C9.7677 9.11171 8.30579 9.28171 7.76176 9.41774C6.06176 9.79171 5.1097 11.0498 4.76976 11.5598L2.69579 10.1997C3.20579 9.41763 4.63373 7.54763 7.21778 6.96969C8.10176 6.76571 10.3798 6.49366 12.4538 7.92174C14.1538 9.11174 15.0038 11.2197 14.5278 13.0897C14.0517 14.9597 12.4878 16.1157 10.9238 17.1357L7.01376 19.6518C6.02773 20.2978 5.24581 20.8418 4.93979 21.5557C4.59979 22.3378 4.87183 23.4257 5.58581 24.1397C6.33376 24.8537 7.31979 25.1937 8.67981 25.1597C10.8558 25.1257 12.3858 23.6637 12.9298 23.0518L14.7319 24.6838C13.9498 25.5338 11.8419 27.5398 8.71387 27.6078C8.67967 27.6418 8.61171 27.6418 8.54365 27.6418L8.54381 27.6417Z'
                fill='#17110D'
              />
              <path d='M0.52002 13.7012H15.922V16.2172H0.52002V13.7012Z' fill='#17110D' />
              <path d='M0.52002 18.5977H15.922V21.1137H0.52002V18.5977Z' fill='#17110D' />
            </svg>
          </div>
          <div className={styles.cartBtns}>
            <button className={styles.continuaBtn}>Продовжити покупки</button>
            <button className={styles.orderBtn}>Оформити замовлення</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
