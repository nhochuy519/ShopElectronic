import ProductCart from '../ProductCar';
import styles from './ProductCartContainer.module.scss';
function ProductCartContainer() {
  return (
    <div className={styles.container}>
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
    </div>
  );
}

export default ProductCartContainer;
