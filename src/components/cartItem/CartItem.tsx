import React from 'react';
import styles from './index.module.scss';
import Item from '../../assets/cartImg.jpg';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartInfo}>
        <img src={Item} alt='img' />
        <div className={styles.title}>
          <h1>crystal retinal</h1>
          <p>Нічна сироватка зі стабільним ретиналем</p>
        </div>
      </div>
      <div className={styles.cartPrice}>
        <div className={styles.price}>
          2184
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='15'
            viewBox='0 0 10 15'
            fill='none'>
            <path
              d='M7.15833 6.66667H10V5H8.6C8.95 4.45 9.16667 3.9 9.16667 3.33333C9.16667 1.14167 7.08333 0 5 0C3.04167 0 1.275 1.71667 1.075 1.90833L2.25833 3.09167C2.65833 2.69167 3.925 1.66667 5 1.66667C5.86667 1.66667 7.5 2.01667 7.5 3.33333C7.5 3.75 7.08333 4.36667 6.46667 5H0V6.66667H4.69167C4.34167 6.96667 3.125 8.05833 2.84167 8.33333H0V10H1.4C1.05 10.55 0.833333 11.1 0.833333 11.6667C0.833333 13.8583 2.91667 15 5 15C6.95833 15 8.725 13.2833 8.925 13.0917L7.74167 11.9083C7.35 12.3083 6.075 13.3333 5 13.3333C4.13333 13.3333 2.5 12.9833 2.5 11.6667C2.5 11.25 2.91667 10.6333 3.53333 10H10V8.33333H5.31667L7.15833 6.66667Z'
              fill='#17110D'
            />
          </svg>
        </div>
        <div className={styles.count}>
          <button className={styles.minusBtn}>
            <img src={minus} alt='minus' />
          </button>
          <span className={styles.countNumber}>1</span>
          <button className={styles.plusBtn}>
            <img src={plus} alt='plus' />
          </button>
        </div>
        <div className={styles.fullPrice}>
          <span>2184</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='15'
            viewBox='0 0 10 15'
            fill='none'>
            <path
              d='M7.15833 6.66667H10V5H8.6C8.95 4.45 9.16667 3.9 9.16667 3.33333C9.16667 1.14167 7.08333 0 5 0C3.04167 0 1.275 1.71667 1.075 1.90833L2.25833 3.09167C2.65833 2.69167 3.925 1.66667 5 1.66667C5.86667 1.66667 7.5 2.01667 7.5 3.33333C7.5 3.75 7.08333 4.36667 6.46667 5H0V6.66667H4.69167C4.34167 6.96667 3.125 8.05833 2.84167 8.33333H0V10H1.4C1.05 10.55 0.833333 11.1 0.833333 11.6667C0.833333 13.8583 2.91667 15 5 15C6.95833 15 8.725 13.2833 8.925 13.0917L7.74167 11.9083C7.35 12.3083 6.075 13.3333 5 13.3333C4.13333 13.3333 2.5 12.9833 2.5 11.6667C2.5 11.25 2.91667 10.6333 3.53333 10H10V8.33333H5.31667L7.15833 6.66667Z'
              fill='#17110D'
            />
          </svg>
        </div>
        <button className={styles.deleteItemBtn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'>
            <path
              d='M16.5467 7.44065L14.76 18.1073C14.732 18.2604 14.6514 18.3988 14.5321 18.4986C14.4127 18.5985 14.2623 18.6534 14.1067 18.654H5.89335C5.73778 18.6534 5.5873 18.5985 5.46798 18.4986C5.34867 18.3988 5.26802 18.2604 5.24002 18.1073L3.45335 7.44065C3.43796 7.34572 3.4433 7.24858 3.46898 7.1559C3.49467 7.06322 3.54011 6.9772 3.60217 6.90373C3.66424 6.83027 3.74146 6.7711 3.82855 6.73029C3.91563 6.68949 4.01052 6.668 4.10669 6.66732H15.88C15.9773 6.66606 16.0737 6.68612 16.1624 6.72608C16.2511 6.76604 16.33 6.82494 16.3936 6.89864C16.4571 6.97233 16.5037 7.05904 16.5302 7.15268C16.5566 7.24631 16.5623 7.34461 16.5467 7.44065ZM17.3334 4.66732C17.3334 4.84413 17.2631 5.0137 17.1381 5.13872C17.0131 5.26375 16.8435 5.33398 16.6667 5.33398H3.33335C3.15654 5.33398 2.98697 5.26375 2.86195 5.13872C2.73693 5.0137 2.66669 4.84413 2.66669 4.66732C2.66669 4.49051 2.73693 4.32094 2.86195 4.19591C2.98697 4.07089 3.15654 4.00065 3.33335 4.00065H6.66669V2.00065C6.66669 1.82384 6.73693 1.65427 6.86195 1.52925C6.98697 1.40422 7.15654 1.33398 7.33335 1.33398H12.6667C12.8435 1.33398 13.0131 1.40422 13.1381 1.52925C13.2631 1.65427 13.3334 1.82384 13.3334 2.00065V4.00065H16.6667C16.8435 4.00065 17.0131 4.07089 17.1381 4.19591C17.2631 4.32094 17.3334 4.49051 17.3334 4.66732ZM12 4.00065V2.66732H8.00002V4.00065H12Z'
              fill='#17110D'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;