import styles from './MyOrder.module.scss';

import instance from '`/apiConfig';

import { useEffect, useState } from 'react';

function MyOrder() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    instance.get('/customer/userOrder').then((result) => {
      const data = result.data.data;
      // console.log('data là', data);
      // console.log('ngay tao', new Date(data[0].createdAt).getFullYear());
      setOrders(data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tilte}>
        <h1>My orders</h1>
      </div>
      {orders &&
        orders.map((item, index) => {
          const date = new Date(item.createdAt);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          return (
            <div className={styles.orders} key={index}>
              <div className={styles.infor}>
                <div>
                  <p>Order Id:&nbsp; </p>
                  <p className={styles.idOrder}>{item._id}</p>
                </div>
                <div>
                  <p>Created at:&nbsp; </p>
                  <p>
                    {day}/{month}/{year}
                  </p>
                </div>
              </div>

              {item.itemsProduct.map((item, index) => {
                console.log(item);
                return (
                  <div className={styles.product} key={index}>
                    <img src={item.idProduct.images[0]} alt="" />

                    <div>
                      <p>Name: {item.idProduct.name}</p>
                      <p>
                        Config:{' '}
                        {item.idVariantProduct.configuration || 'Default'}
                      </p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div>
                      <p>Price: {item.price}</p>
                    </div>
                  </div>
                );
              })}

              <div className={styles.total}>
                <p>Total:&nbsp;</p>
                <p> $ {item.total}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MyOrder;
