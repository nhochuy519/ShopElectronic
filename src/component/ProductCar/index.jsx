import styles from './ProductCar.module.scss';

import { IoIosStar } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
function ProductCart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productThumnailWrapper}>
        <img src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/661b86c4df6b936aa699fb6a_2763-p-800.webp" />
        <a className={styles.imgHover}>
          <img
            src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/661b86dbdf6b936aa69a0a95_2150763335-p-800.webp"
            alt=""
          />
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
        <div className={styles.nameProduct}>Mac book</div>
        <div className={styles.starWrapper}>
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className={styles.priceWrapper}>$ 240.00 USD</div>

        {/* <div className={styles.idProduct}>
          <span>SKU:</span>
          <span>nx123123</span>
        </div>
        <div className={styles.stock}>
          <span>STOCK:</span>
          <span
            style={{
              color: 'var(--main-color-primary)',
            }}
          >
            AVAILABLE
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default ProductCart;
