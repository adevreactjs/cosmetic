import React from 'react';
import styles from './index.module.scss';
import mainpic from '../../assets/mainpic.jpg';
import moreBtn from '../../assets/learnmore.svg';
import moreImg from '../../assets/secondpic.jpg';
import product1 from '../../assets/vitamina.jpg';
import product2 from '../../assets/vitaminc.jpg';
import product3 from '../../assets/sunscreen.jpg';
import arrowlink from '../../assets/arrowlink.svg'

const MainServices = () => {
  return (
    <>
      <section className={styles.mainServices}>
        <div className={styles.container}>
          <div className={styles.mainBanner}>
            <img src={mainpic} alt='mainpic' />
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
            <p>свою шкіру</p>
          </div>
          <div></div>
        </div>
      </section>

      <section className={styles.mainServices__items}>
        <div className={styles.container__service}>
          <h2>послуги</h2>
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
          </div>
        </div>
      </section>

      <section className={styles.mainServices__products}>
        <div className={styles.container__service}>
          <h2>Продукція csa</h2>
          <div className={styles.mainServices__wrapper}>
            <div className={styles.mainServices__product}>
              <img src={product2} alt='product2' />
              <p>Вітамін C</p>
              <div className={styles.mainServices__productHover__item}>
                <h4>Вітамін</h4>
                <p>
                  Створені неймовірно потужні формули в ретельно стабілізованих сполуках підживлять
                  вашу шкіру
                </p>
                <button>Дізнатися більше</button>
              </div>
            </div>
            <div className={styles.mainServices__product}>
              <img src={product3} alt='product3' />
              <p>Сонцезахист</p>
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
              <img src={product1} alt='product1' />
              <p>Вітамін А</p>
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
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
            <div className={styles.mainServices__products__item}>
              <span>продукти</span>
              <img src={arrowlink} alt='arrowlink' />
            </div>
          </div>
          <div className={styles.mainServices__products_btn}>
            <button>Записатися на прийом</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainServices;
