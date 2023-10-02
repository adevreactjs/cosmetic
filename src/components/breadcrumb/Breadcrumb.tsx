import React, { FC } from 'react';
import styles from './index.module.scss';
import separator from '../../assets/separ.svg'

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className={styles.breadcrumb}>
      {items.map((item, index) => (
        <div className={styles.item} key={index}>
          {item}
          {index < items.length - 1 && (
            <div className={styles.separator}>
              <img src={separator} alt='separator' />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
