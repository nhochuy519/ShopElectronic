import styles from './ProductCar.module.scss';

import { IoIosStar } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

import clsx from 'clsx';

import Star from '../Star';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

function ProductCart({ flexRow, data }) {
  const [product, setProduct] = useState(data);

  useEffect(() => {
    setProduct(data);
  }, [data]);
  const className = clsx(styles.wrapper, {
    [styles.flexRow]: flexRow,
  });

  function truncateString(str, maxLength) {
    const newStr = str.split(' ');

    if (newStr.length <= maxLength) {
      return newStr;
    }
    return newStr.slice(0, maxLength).join(' ') + '...';
  }
  return (
    <Link to={`/product/${product ? product._id : 123}`}>
      <div className={className}>
        <div className={styles.productThumnailWrapper}>
          <img src={product ? product.images[0] : null} />
          <a className={styles.imgHover}>
            <img src={product ? product.images[2] : null} alt="" />
          </a>
          <div className={styles.addToCart}>
            <div className={styles.cart}>
              <FaCartPlus />
            </div>
            <div className={styles.eye}>
              <IoEyeSharp />
            </div>
          </div>
        </div>
        <div className={styles.inforProduct}>
          <div className={styles.nameProduct}>
            {product ? truncateString(product.name, 3.8) : undefined}
          </div>
          <Star />
          <div className={styles.priceWrapper}>
            $ {product ? product.price : 0}
          </div>
          {/* 
          <div className={styles.idProduct}>
            <span>SKU:</span>
            <span>nx123123</span>
          </div> */}
          <div className={styles.stock}>
            <span>STOCK:</span>
            <span
              style={{
                color: 'var(--main-color-primary)',
              }}
            >
              AVAILABLE
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCart;
