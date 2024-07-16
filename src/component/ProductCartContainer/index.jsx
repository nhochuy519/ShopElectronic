import ProductCart from '../ProductCar';
import styles from './ProductCartContainer.module.scss';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

function ProductCartContainer({ twoColumns, flexRow, data }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);
  const className = clsx(styles.wrapper, {
    [styles.twoColumns]: twoColumns,
  });
  const props = {
    flexRow,
  };
  return (
    <div className={className}>
      {products
        ? products.map((item, index) => {
            return <ProductCart {...props} key={index} data={item} />;
          })
        : null}
    </div>
  );
}

export default ProductCartContainer;
