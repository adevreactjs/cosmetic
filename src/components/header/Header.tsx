import React from 'react';
import styles from './index.module.scss';
import logo from './../../assets/logo.svg';
import search from '../../assets/search.svg';
import cart from '../../assets/cart.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt='logo' />
          </div>
          <nav className={styles.navbar}>
            <ul>
              <li>головна</li>
              <li>послуги</li>
              <li>продукція csa</li>
              <li>асортимент товарів</li>
              <li>про мене</li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__wrapper}>
          <div className={styles.header__searchBar}>
            <div className={styles.header__searchBarImg}>
              <img src={search} alt='search' />
            </div>
            <input type='text' />
          </div>
          <div className={styles.header__cart}>
            <img src={cart} alt='cart' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
