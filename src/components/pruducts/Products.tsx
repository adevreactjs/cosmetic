import React from 'react';
import styles from './index.module.scss';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import ProductCart from '../productCart/ProductCart';

const Products = () => {
  const breadcrumbItems = ['Головна', 'Продукція CSA', 'Вітамін А'];
  const products = [
    { image: '', title: 'crystal retinal', volume: 30, price: 2184, id: 1 },
    { image: '', title: 'intelligent retinol 3tr', volume: 15, price: 1848, id: 2 },
    { image: '', title: 'crystal retinal', volume: 30, price: 2184, id: 3 },
    { image: '', title: 'crystal retinal', volume: 30, price: 2184, id: 4 },
    { image: '', title: 'crystal retinal', volume: 30, price: 2184, id: 5 },
    { image: '', title: 'crystal retinal', volume: 30, price: 2184, id: 6 },
    { image: '', title: 'crystal retinal', volume: 30, price: 2184, id: 7 },
    { image: '', title: 'crystal retinal', volume: 30, price: 2184, id: 8 },
    { image: '', title: 'crystal retinal', volume: 30, price: 2184, id: 9 },
    { image: '', title: 'Retinol 3tr', volume: 15, price: 1624, id: 10 },
    { image: '', title: 'Retinol 3tr', volume: 15, price: 1624, id: 11 },
    { image: '', title: 'Retinol 3tr', volume: 15, price: 1624, id: 12 },
    { image: '', title: 'Retinol 3tr', volume: 15, price: 1624, id: 13 },
  ];

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <Breadcrumb items={breadcrumbItems} />
        <div className={styles.title}>
          <h1>вітамін а</h1>
          <p>
            Завдяки ретинолу дані креми та сироватки забезпечують ніжність, пружність, здоровий
            об’єм і молодість шкіри. Препарат повільно доставляє вітамін А в шкіру під час Вашого
            сну, щоб запобігти перенасичення цим потужним інгредієнтом та появу подразнення, що
            іноді відбувається при застосуванні продуктів інших брендів.
          </p>
        </div>
        <div className={styles.productItems}>
          {products.map(product => (
            <ProductCart key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
