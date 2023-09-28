import React from 'react';
import styles from './index.module.scss';
import mainpic2 from '../../assets/mainpic.jpg';
import mainpic from '../../assets/mainpic2.jpg';
import moreBtn from '../../assets/learnmore.svg';
import moreImg from '../../assets/secondpic.jpg';
import product1 from '../../assets/vitamina.jpg';
import product2 from '../../assets/vitaminc.jpg';
import product3 from '../../assets/sunscreen.jpg';
import arrowlink from '../../assets/arrowlink.svg';

const MainServices = () => {
  return (
    <>
      <section className={styles.mainServices}>
        <div className={styles.container}>
          <div className={styles.mainBanner}>
            <img id='mainpic' src={mainpic} alt='mainpic' />
            <img id='mainpic2' src={mainpic2} alt='mainpic2' />
            <div className={styles.mainServices__roundcover}>
              <div className={styles.mainServices__round}>
                <button className={styles.mainServices__btn}>
                  Дізнатися більше
                  <img className={styles.mainServices__img} src={moreBtn} alt='moreBtn' />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.mainServices__disc}>
            <p>
              Купуйте косметичні засоби та не бійтеся, будуть вони діяти чи ні. Необхідний для Вашої
              шкіри засіб я особисто підберу!
            </p>
            <img src={moreImg} alt='moreImg' />
          </div>
          <div className={styles.mainServices__title}>
            <h2>подбай про</h2>
            <p>
              свою <span>шкіру</span>
            </p>
          </div>
          <div></div>
        </div>
      </section>

      <section className={styles.mainServices__items}>
        <div className={styles.container__service}>
          <h2 id='service'>послуги</h2>
          <div className={styles.mainServices__wrapper}>
            <div className={styles.mainServices__item}>
              <span className={styles.mainServices__itemNumber}>01</span>
              <div className={styles.mainServices__itemTitle}>
                Підбір косметичних засобів для Вашої шкіри
              </div>
            </div>
            <div className={styles.mainServices__item}>
              <span className={styles.mainServices__itemNumber}>02</span>
              <div className={styles.mainServices__itemTitle}>
                Масаж обличчя для покрщення стану шкіри та необхідні доглядові поцедури
              </div>
            </div>
            <div className={styles.mainServices__separate}></div>

            <div className={styles.mainServices__item}>
              <span className={styles.mainServices__itemNumber}>03</span>
              <div className={styles.mainServices__itemTitle}>
                Пілінги та гігієнічна чистка обличчя для омолодження шкіри
              </div>
            </div>
            <div className={styles.mainServices__item}>
              <span className={styles.mainServices__itemNumber}>04</span>
              <div className={styles.mainServices__itemTitle}>
                Мезотерапія та біоревіталізація для відновлення шкіри
              </div>
            </div>
            <div className={styles.mainServices__separate}></div>
          </div>
        </div>
      </section>

      <section className={styles.mainServices__products}>
        <div className={styles.container__service}>
          <h2>Продукція csa</h2>
          <div className={styles.mainServices__wrapper}>
            <div className={styles.mainServices__product}>
              <div className={styles.mainServices__product}>
                <div className={styles.mainServices__productwrapper}>
                  <img src={product2} alt='product2' />
                  <div className={styles.mainServices__productdesc}>
                    <h4>Вітамін C</h4>
                    <p>
                      Створені неймовірно потужні формули в ретельно стабілізованих сполуках
                      підживлять вашу шкіру
                    </p>
                    <button>Дізнатися більше</button>
                    <div className={styles.mainServices__moreImg}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='75'
                        height='12'
                        viewBox='0 0 75 12'
                        fill='none'>
                        <path
                          d='M0.5 6H74M74 6L68.5 1M74 6L68.5 11'
                          stroke='#17110D'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className={styles.mainServices__productTitle}>Вітамін C</p>
              </div>
              <div className={styles.mainServices__productHover__item}>
                <h4>Сонцезахист</h4>
                <p>
                  Ключова антивікова філософія передбачає щоденне застосування сонцезахисного крему
                </p>
                <button>Дізнатися більше</button>
              </div>
            </div>
            <div className={styles.mainServices__product}>
              <div className={styles.mainServices__productwrapper}>
                <img src={product3} alt='product3' />
                <div className={styles.mainServices__productdesc}>
                  <h4>Сонцезахист</h4>
                  <p>
                    Ключова антивікова філософія передбачає щоденне застосування сонцезахисного
                    крему{' '}
                  </p>
                  <button>Дізнатися більше</button>
                  <div className={styles.mainServices__moreImg}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='75'
                      height='12'
                      viewBox='0 0 75 12'
                      fill='none'>
                      <path
                        d='M0.5 6H74M74 6L68.5 1M74 6L68.5 11'
                        stroke='#17110D'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className={styles.mainServices__productTitle}>Сонцезахист</p>
              <div className={styles.mainServices__productHover__item}>
                <h4>Сонцезахист</h4>
                <p>
                  Створені неймовірно потужні формули в ретельно стабілізованих сполуках підживлять
                  вашу шкіру
                </p>
                <button>Дізнатися більше</button>
              </div>
            </div>
            <div className={styles.mainServices__product}>
              <div className={styles.mainServices__productwrapper}>
                <img src={product1} alt='product1' />
                <div className={styles.mainServices__productdesc}>
                  <h4>Вітамін A</h4>
                  <p>
                    Це золотий стандарт догляду за шкірою, який забезпечить Вам красу на все життя{' '}
                  </p>
                  <button>Дізнатися більше</button>
                  <div className={styles.mainServices__moreImg}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='75'
                      height='12'
                      viewBox='0 0 75 12'
                      fill='none'>
                      <path
                        d='M0.5 6H74M74 6L68.5 1M74 6L68.5 11'
                        stroke='#17110D'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className={styles.mainServices__productTitle}>Вітамін А </p>
              <div className={styles.mainServices__productHover__item}>
                <h4>Вітамін А</h4>
                <p>
                  Створені неймовірно потужні формули в ретельно стабілізованих сполуках підживлять
                  вашу шкіру
                </p>
                <button>Дізнатися більше</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mainServices__products__range}>
        <div className={styles.container__service}>
          <h2>Асортимент товарів</h2>
          <div className={styles.mainServices__products}>
            <div className={styles.mainServices__products__item}>
              <span>Всі продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>Висипи</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>Відновлення</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>Пігментація</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>Розширені пори</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>Почервоніння</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>Старіння шкіри</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>Очі та губи</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>Тіло</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
          </div>
          <div className={styles.mainServices__products_btn}>
            <button>
              Записатися <span>на прийом</span>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.mainServices__about}>
        <div className={styles.container__service}>
          <h2>про мене</h2>
          <div className={styles.mainServices__features}>
            <div className={styles.mainServices__feature}>
              Косметолог з досвідом роботи більше 10 років
            </div>
            <div className={styles.mainServices__feature}>
              Спеціалізуюсь по лікуванню та омолодженню шкіри
            </div>
            <div className={styles.mainServices__feature}>
              Сертифікований спеціаліст із загальної терапії краси
            </div>
            <div className={styles.mainServices__feature}>
              Більше 1000 постійних та задоволених клієнтів
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainServices;
