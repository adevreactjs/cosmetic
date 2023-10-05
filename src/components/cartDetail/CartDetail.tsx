import React from 'react';
import styles from './index.module.scss';
import cream from '../../assets/infocart.jpg';
import Breadcrumb from '../breadcrumb/Breadcrumb';

const CartDetail = () => {
  const breadcrumbItems = ['Головна', 'Продукція CSA', 'Вітамін А', 'Crystal Retinal'];

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.container}>
          <Breadcrumb items={breadcrumbItems} />
          <div className={styles.info}>
            <img src={cream} alt='cream' />
            <div className={styles.description}>
              <h1>crystal retinal</h1>
              <h4>Нічна сироватка зі стабільним ретиналем</h4>
              <p>
                Знову відкрийте молодість шкіри завдяки Crystal Retinal. В основі формули —
                стабілізований ретиналь — потужне похідне вітаміну А разом з антивіковою
                ефективністю наступного покоління. Революційна нічна сироватка помітно зменшує тонкі
                лінії й зморшки, зміцнює й вирівнює текстуру поверхні шкіри, оновлює й покращує тон
                і тонус шкіри. Завдяки вмісту гіалуронової кислоти, гліцерину й вітаміну Е, формула
                гідратує шкіру на всіх рівнях, ефективно підвищує тонус і візуально омолоджує шкіру.
                Крім того, сироватка бореться з патогенними бактеріями, які здатні викликати висипи,
                тому шкіра стає бездоганною і чистою.{' '}
              </p>
              <div className={styles.price}>
                <div className={styles.priceCount}>
                  2184{' '}
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
                    <path d='M0.52002 13.7021H15.922V16.2182H0.52002V13.7021Z' fill='#17110D' />
                    <path d='M0.52002 18.5977H15.922V21.1137H0.52002V18.5977Z' fill='#17110D' />
                  </svg>
                </div>
                <button className={styles.buyBtn}>Купити</button>
              </div>
            </div>
            <div className={styles.features}>
              <div className={styles.featuresTitle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='21'
                  viewBox='0 0 27 21'
                  fill='none'>
                  <path
                    d='M26.4998 0.875L10.0051 20.1248L1.00002 10.503'
                    stroke='#17110D'
                    stroke-width='0.904762'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Без синтетичних фарбників</span>
              </div>
              <div className={styles.featuresTitle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='21'
                  viewBox='0 0 27 21'
                  fill='none'>
                  <path
                    d='M26.4998 0.875L10.0051 20.1248L1.00002 10.503'
                    stroke='#17110D'
                    stroke-width='0.904762'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Без спирту</span>
              </div>
              <div className={styles.featuresTitle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='21'
                  viewBox='0 0 27 21'
                  fill='none'>
                  <path
                    d='M26.4998 0.875L10.0051 20.1248L1.00002 10.503'
                    stroke='#17110D'
                    stroke-width='0.904762'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Без парабенів</span>
              </div>
              <div className={styles.featuresTitle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='21'
                  viewBox='0 0 27 21'
                  fill='none'>
                  <path
                    d='M26.4998 0.875L10.0051 20.1248L1.00002 10.503'
                    stroke='#17110D'
                    stroke-width='0.904762'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Без фталатів</span>
              </div>
              <div className={styles.featuresTitle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='21'
                  viewBox='0 0 27 21'
                  fill='none'>
                  <path
                    d='M26.4998 0.875L10.0051 20.1248L1.00002 10.503'
                    stroke='#17110D'
                    stroke-width='0.904762'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Внесок у фонд ZIPPER</span>
              </div>
              <div className={styles.featuresTitle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='21'
                  viewBox='0 0 27 21'
                  fill='none'>
                  <path
                    d='M26.4998 0.875L10.0051 20.1248L1.00002 10.503'
                    stroke='#17110D'
                    stroke-width='0.904762'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Без штучних ароматизаторів</span>
              </div>
              <div className={styles.featuresTitle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='21'
                  viewBox='0 0 27 21'
                  fill='none'>
                  <path
                    d='M26.4998 0.875L10.0051 20.1248L1.00002 10.503'
                    stroke='#17110D'
                    stroke-width='0.904762'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Не тестується на тваринах</span>
              </div>
              <div className={styles.featuresTitle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='21'
                  viewBox='0 0 27 21'
                  fill='none'>
                  <path
                    d='M26.4998 0.875L10.0051 20.1248L1.00002 10.503'
                    stroke='#17110D'
                    stroke-width='0.904762'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Підходить для веганів</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartDetail;
