import imageCart from '../../assets/crystalretinal 1.jpg';
import hryvnia from '../../assets/hryvnia.svg';
import cart from '../../assets/cart2.svg';
import styles from './index.module.scss';
import { FC } from 'react';

interface Product {
  image: string;
  id: number;
  price: number;
  title: string;
  value: number;
}
interface Products {
  product: Product;
}

const ProductCart: FC<Products> = ({ product }) => {
  console.log(product);
  return (
    <div className={styles.productCart}>
      <div className={styles.imageCart}>
        <img src={imageCart} alt='imageCart' />
      </div>
      <div className={styles.title}>
        <h2>crystal retinal</h2>
        <div className={styles.description}>
          {product.value}мл / від {product.price} <img src={hryvnia} alt='hryvnia' />
        </div>
      </div>
      <div className={styles.cartInfo}>
        <button>Детальніше</button>
        <img src={cart} alt='cart' />
      </div>
    </div>
  );
};

export default ProductCart;
