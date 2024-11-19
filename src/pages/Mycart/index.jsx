import styles from './Mycart.module.scss';
import ItemCart from '../ItemCart';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '`/Reducer/cartReducer/cartSlice';
import { Link } from 'react-router-dom';

function MyCart() {
  const [quantityPrd, setQuantity] = useState(0);
  const valueSeach = useSelector((state) => state.cart);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchCartItems());
  }, [dispath]);

  const itemsProduct = valueSeach.items.data?.itemsProduct || [];
  const totalAmount = valueSeach.items.data?.total || 0;
  console.log(itemsProduct);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.cartTitle}>
        Cart - {itemsProduct.length}{' '}
        {itemsProduct.length === 1 ? 'item' : 'items'}
      </h2>
      <div className={styles.mycartcontainer}>
        <div className={styles.itemsProduct}>
          {itemsProduct.length > 0 ? (
            itemsProduct.map((item, index) => (
              <ItemCart
                key={index}
                name={item.idProduct.name}
                color={item.idVariantProduct.color}
                config={item.idVariantProduct.configuration}
                price={item.idVariantProduct.price}
                img={item.idProduct.images[0]}
                quantity={item.quantity}
                idCart={valueSeach.items.data._id}
                idItem={item._id}
                idProduct={item.idProduct._id}
              />
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
        <div className={styles.checkOut}>
          <h2>Order summary</h2>
          <div className={styles.total}>
            <p>Products</p>
            <p>${totalAmount}</p>
          </div>
          <div className={styles.total}>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div
            className={clsx(styles.total, {
              [styles.totalPrice]: true,
            })}
          >
            <p>Total amount (including VAT)</p>
            <p>${totalAmount}</p>
          </div>
          {itemsProduct.length > 0 ? (
            <Link to={'/checkout'}>
              <div className={styles.bttCheckOut}>Go to check out</div>
            </Link>
          ) : (
            <p>You don't have any products yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
