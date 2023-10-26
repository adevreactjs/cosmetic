import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import ProductCart from '../productCart/ProductCart';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS, GET_CART_BY_ID } from '../../query/products';

const Products = () => {
  const breadcrumbItems = ['Головна', 'Продукція CSA', 'Вітамін А'];
  const [id, setId] = useState(1);
  const { data, loading} = useQuery(GET_ALL_PRODUCTS);
  const { data: cart} = useQuery(GET_CART_BY_ID, {
    variables: {
      id: id
    },
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!loading) {
      setProducts(data.getAllProducts);
    }
  }, [data, cart]);

  const getCartById = (id: number) => {
    setId(id);
  };
    console.log(cart);


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
            <ProductCart key={product} product={product} getCartById={getCartById} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
