import styles from './ItemCart.module.scss';
import { MdDelete } from 'react-icons/md';

import { useEffect, useState, useCallback } from 'react';
import lodash from 'lodash';
import instance from '`/apiConfig';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCartItems } from '`/Reducer/cartReducer/cartSlice';

function ItemCart({
  name,
  color,
  config,
  quantity,
  price,
  img,
  idCart,
  idItem,
  idProduct,
}) {
  const [value, setValue] = useState(quantity || 0);
  const dispath = useDispatch();
  const handleUpdateQuantity = async (quantity) => {
    await instance.patch(
      'customer/updateCart',
      {
        idCart,
        idItem,
        quantity: quantity,
      },
      { withCredentials: true },
    );
    dispath(fetchCartItems());
  };
  const debounce = useCallback(lodash.debounce(handleUpdateQuantity, 500), []);
  const handleChangeQuantity = (quantity) => {
    debounce(quantity);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={img} alt="" />
        </div>
        <div className={styles.info}>
          <Link to={`/product/${idProduct}`}>
            <div className={styles.nameProduct}>{name}</div>
          </Link>

          <div className={styles.colorProduct}>
            <p>Color:</p>
            <p>{color}</p>
          </div>
          <div className={styles.configProduct}>
            <p>Config:</p>
            <p>{config}</p>
          </div>
          <div>${price}</div>
        </div>
      </div>
      <div className={styles.quantity}>
        <button
          onClick={() => {
            setValue((prev) => prev - 1);
            handleChangeQuantity(value - 1);
          }}
        >
          -
        </button>
        <input type="text" value={value} />
        <button
          onClick={() => {
            setValue((prev) => prev + 1);
            handleChangeQuantity(value + 1);
          }}
        >
          +
        </button>
      </div>
      <div className={styles.btDelete}>
        <MdDelete />
      </div>
    </div>
  );
}

export default ItemCart;
