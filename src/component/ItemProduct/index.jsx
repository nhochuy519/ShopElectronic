import styles from './ItemProduct.module.scss';

import { IoWatchOutline } from 'react-icons/io5';

function ItemProduct({ icon, title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>{icon}</div>
      <div className={styles.tilte}>{title}</div>
    </div>
  );
}

export default ItemProduct;
