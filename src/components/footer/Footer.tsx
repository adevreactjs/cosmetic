import React from 'react';
import styles from './index.module.scss';
import insta from '../../assets/instagram.svg';
import arrow from '../../assets/arrowback.svg';
import person from '../../assets/personl.svg';
import arrowsend from '../../assets/arrowsend.svg';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__socials}>
          <img src={arrow} alt='arrow' />
          <img src={insta} alt='insta' />
        </div>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__info}>
            <div className={styles.footer__navigation}>
              <div className={styles.footer__signIn}>
                <img src={person} alt='person' />
                <span>Увійти</span>
              </div>
              <div className={styles.footer__navlink}>
                <ul>
                  <li>Головна</li>
                  <li>Послуги</li>
                  <li>Про мене</li>
                </ul>
              </div>
            </div>
            <div className={styles.footer__products}>
              <ul>
                <li>Продукція CSA</li>
                <li>Вітамін С</li>
                <li>Сонцезахист</li>
                <li>Вітамін А</li>
              </ul>
            </div>
            <div className={styles.footer__products}>
              <ul>
                <li>Асортимент товарів</li>
                <li>Всі продукти</li>
                <li>Висипи</li>
                <li>Відновлення</li>
                <li>Пігментація</li>
                <li>Розширені пори</li>
                <li>Почервоніння</li>
                <li>Старіння шкіри</li>
                <li>Очі та губи</li>
                <li>Тіло</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer__form}>
            <h5>Відправити повідомлення</h5>
            <form action='#'>
              <div className={styles.footer__formField}>
                <input type='text' placeholder='Ваше ім’я' />
              </div>
              <div className={styles.footer__formField}>
                <input type='text' placeholder='Номер телефону або пошта' />
              </div>
              <div className={styles.footer__wrapper}>
                <div className={styles.footer__formField}>
                  <input type='text' placeholder='Що Вас цікавить?' />
                </div>
                <img src={arrowsend} alt='arrowsend' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
