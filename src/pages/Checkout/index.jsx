import styles from './Checkout.module.scss';
import { LiaMoneyBillSolid } from 'react-icons/lia';
import { LiaCcAmazonPay } from 'react-icons/lia';

import { useEffect, useState } from 'react';

import instance from '`/apiConfig';

import clsx from 'clsx';

import { limitedName } from '`/handleGlobalFunc';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';

import { useDispatch } from 'react-redux';

import { fetchCartItems } from '`/Reducer/cartReducer/cartSlice';

function Checkout() {
  const dispath = useDispatch();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [addressErr, setAddressErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [pmMethod, setPmMethod] = useState('COD');

  const [products, setProducts] = useState({});

  const [createOrder, setCreateOrder] = useState(false);

  useEffect(() => {
    instance
      .get('/customer/userCart', { withCredentials: true })
      .then((result) => {
        const items = result.data.data;
        console.log('items', items);
        setProducts(items);
      })
      .catch(() => {
        setProducts(null);
      });
  }, []);

  const handleCreateOrder = () => {
    if (name === '') {
      setNameErr(true);
      return;
    }
    if (phone === '') {
      setPhoneErr(true);
      return;
    }
    if (address === '') {
      setAddressErr(true);
      return;
    }

    let itemOrder = null;
    if (products) {
      itemOrder = products.itemsProduct.map((item, index) => {
        console.log(item);
        return {
          idProduct: item.idProduct._id,
          idVariantProduct: item.idVariantProduct._id,
          quantity: item.quantity,
          price: item.price,
        };
      });
    }
    const obj = {
      idCart: products.id,
      itemsOrder: itemOrder,
      total: products.total,
      username: name,
      address,
      paymentMethod: pmMethod,
      numberPhone: phone,
    };
    console.log(obj);
    instance
      .post('/customer/userOrder', obj, { withCredentials: true })
      .then(() => {
        console.log('thành công');
        setCreateOrder(true);
        dispath(fetchCartItems());
      })
      .catch(() => {
        console.log('gửi thất bại');
      });
  };
  if (createOrder) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.cartEmpty}>
          <h2>Tạo đơn hàng thành công</h2>
          <div className={styles.iconCheckContainer}>
            <FaRegCheckCircle />
          </div>

          <Link to={'/'}>
            <div className={styles.bttHome} onClick={() => {}}>
              Back to Home
            </div>
          </Link>
        </div>
      </div>
    );
  }

  if (!products) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.cartEmpty}>
          <h2>Not in cart yet</h2>
          <Link to={'/'}>
            <div className={styles.bttHome}>Back to HomePage</div>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.delivery}>
        <h2>Delivery Details </h2>
        <div>
          <div className={styles.fillInput}>
            <p>Name</p>
            <input
              value={name}
              type="text"
              placeholder="your name"
              required
              onInput={(e) => {
                if (nameErr === true) {
                  setNameErr(false);
                }

                setName(e.target.value);
              }}
            />
            <div
              className={clsx(styles.warning, {
                [styles.active]: nameErr,
              })}
            >
              Name cannot be empty
            </div>
          </div>
          <div className={styles.fillInput}>
            <p>Phone number</p>
            <input
              value={phone}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="11"
              required
              placeholder="your number phone"
              onInput={(e) => {
                if (phoneErr === true) {
                  setPhoneErr(false);
                }

                setPhone(e.target.value);
              }}
            />
            <div
              className={clsx(styles.warning, {
                [styles.active]: phoneErr,
              })}
            >
              Invalid phone number (length between 8 - 15 characters, does not
              contain special characters and spaces)
            </div>
          </div>
          <div className={styles.fillInput}>
            <p>Address</p>
            <input
              value={address}
              type="text"
              placeholder="your address"
              required
              onInput={(e) => {
                if (addressErr === true) {
                  setAddressErr(false);
                }

                setAddress(e.target.value);
              }}
            />
            <div
              className={clsx(styles.warning, {
                [styles.active]: addressErr,
              })}
            >
              Address cannot be empty.
            </div>
          </div>
          <div className={styles.chosePayment}>
            <p>Payment method</p>
            <div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="cod"
                  checked={pmMethod === 'COD' ? true : false}
                  onChange={() => {
                    setPmMethod('COD');
                  }}
                />
                <LiaMoneyBillSolid />
                <label htmlFor="cod">COD</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="bank"
                  checked={pmMethod !== 'COD' ? true : false}
                  onChange={() => {
                    setPmMethod('Bank Transfer');
                  }}
                />
                <LiaCcAmazonPay />
                <label htmlFor="bank">Bank transfer</label>
              </div>
              <div
                className={clsx(styles.bankMethod, {
                  [styles.showBank]: pmMethod.startsWith('B'),
                })}
              >
                <p>
                  Please transfer money via bank with the following content:
                  Phone number + Full name
                </p>

                <p>Bank MBbank</p>
                <p>Account number 0917919947</p>
                <p>Account owner Phan Minh Huy</p>
              </div>
            </div>
          </div>
          <div className={styles.bttContainer}>
            <div
              className={styles.bttCompleteOrder}
              onClick={handleCreateOrder}
            >
              Complete your order
            </div>
          </div>
        </div>
      </div>
      <div className={styles.total}>
        <div className={styles.productContainer}>
          {products &&
            products.itemsProduct?.map((item, index) => {
              return (
                <div className={styles.productItem} key={index}>
                  <div className={styles.imgProduct}>
                    <img src={item.idProduct.images[0]} alt="" />
                    <div className={styles.quantity}>{item.quantity}</div>
                  </div>

                  <div className={styles.nameConfig}>
                    <p>{limitedName(item.idProduct.name, 10)}</p>
                    <p>Config:{item.idVariantProduct.configuration}</p>
                  </div>
                  <p>11.000</p>
                </div>
              );
            })}
        </div>
        <div className={styles.code}>
          <input type="text" placeholder="discount code" />
          <div>use</div>
        </div>
        <div className={styles.totalContainer}>
          <p>Total:</p>
          <p>${products.total}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
