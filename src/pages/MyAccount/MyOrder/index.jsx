import styles from './MyOrder.module.scss';

function MyOrder() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tilte}>
        <h1>My orders</h1>
      </div>
      <div className={styles.orders}>
        <div className={styles.infor}>
          <div>
            <p>Order Id:&nbsp; </p>
            <p className={styles.idOrder}>dfasdkfhjnalskdhjfq1231</p>
          </div>
          <div>
            <p>Order Date:&nbsp; </p>
            <p>12/3/2001</p>
          </div>
        </div>
        <div className={styles.product}>
          <img
            src="https://hobby-genki.com/256694-large_default/reno-summer-spin-off-azur-lane-17-scale-figure.jpg"
            alt=""
          />

          <div>
            <p>Name: Azur Lane Reno Summer Spin-off</p>
            <p>Phân loại: 123123</p>
            <p>Số lượng: 2</p>
          </div>
          <div>
            <p>Giá: 10000$</p>
          </div>
        </div>
        <div className={styles.product}>
          <img
            src="https://hobby-genki.com/256694-large_default/reno-summer-spin-off-azur-lane-17-scale-figure.jpg"
            alt=""
          />

          <div>
            <p>Name: Azur Lane Reno Summer Spin-off</p>
            <p>Phân loại: 123123</p>
            <p>Số lượng: 2</p>
          </div>
          <div>
            <p>Giá: 10000$</p>
          </div>
        </div>
        <div className={styles.product}>
          <img
            src="https://hobby-genki.com/256694-large_default/reno-summer-spin-off-azur-lane-17-scale-figure.jpg"
            alt=""
          />

          <div>
            <p>Name: Azur Lane Reno Summer Spin-off</p>
            <p>Phân loại: 123123</p>
            <p>Số lượng: 2</p>
          </div>
          <div>
            <p>Giá: 10000$</p>
          </div>
        </div>

        <div className={styles.total}>
          <p>Total:&nbsp;</p>
          <p>178.000 $</p>
        </div>
      </div>

      <div className={styles.orders}>
        <div className={styles.infor}>
          <div>
            <p>Order Id:&nbsp; </p>
            <p className={styles.idOrder}>dfasdkfhjnalskdhjfq1231</p>
          </div>
          <div>
            <p>Order Date:&nbsp; </p>
            <p>12/3/2001</p>
          </div>
        </div>
        <div className={styles.product}>
          <img
            src="https://hobby-genki.com/256694-large_default/reno-summer-spin-off-azur-lane-17-scale-figure.jpg"
            alt=""
          />

          <div>
            <p>Name: Azur Lane Reno Summer Spin-off</p>
            <p>Phân loại: 123123</p>
            <p>Số lượng: 2</p>
          </div>
          <div>
            <p>Giá: 10000$</p>
          </div>
        </div>
        <div className={styles.product}>
          <img
            src="https://hobby-genki.com/256694-large_default/reno-summer-spin-off-azur-lane-17-scale-figure.jpg"
            alt=""
          />

          <div>
            <p>Name: Azur Lane Reno Summer Spin-off</p>
            <p>Phân loại: 123123</p>
            <p>Số lượng: 2</p>
          </div>
          <div>
            <p>Giá: 10000$</p>
          </div>
        </div>
        <div className={styles.product}>
          <img
            src="https://hobby-genki.com/256694-large_default/reno-summer-spin-off-azur-lane-17-scale-figure.jpg"
            alt=""
          />

          <div>
            <p>Name: Azur Lane Reno Summer Spin-off</p>
            <p>Phân loại: 123123</p>
            <p>Số lượng: 2</p>
          </div>
          <div>
            <p>Giá: 10000$</p>
          </div>
        </div>

        <div className={styles.total}>
          <p>Total:&nbsp;</p>
          <p>178.000 $</p>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
