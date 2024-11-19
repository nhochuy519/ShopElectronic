import { useState } from 'react';
import styles from './Product.module.scss';

import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaStripe } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';

import { SiAmericanexpress } from 'react-icons/si';

import Star from '`/component/Star';
import StarEvaluate from '`/component/StarEvaluate';
import BBlock from '`/component/BreadcrumbBlock';

import { useEffect, useCallback } from 'react';

import instance from '`/apiConfig';

import { useParams } from 'react-router-dom';

import { LuLoader2 } from 'react-icons/lu';

import { useDispatch } from 'react-redux';

import { addToCart, fetchCartItems } from '`/Reducer/cartReducer/cartSlice';

import clsx from 'clsx';
import { withEmotionCache } from '@emotion/react';

function Product(props) {
  const { id } = useParams();
  const [imgCurrent, setImgCurrent] = useState(0);
  const [tab, setTab] = useState('description');

  const [product, setProduct] = useState(null);

  const [isLoading, setLoading] = useState(false);

  const [stockAvailable, setStockAvailable] = useState(0);

  const [quantity, setQuatity] = useState(1);

  const [tabOptions, setTabOptions] = useState(0);

  const [price, setPrice] = useState(0);

  const [cmt, setCmt] = useState([]);

  const [profile, setProfile] = useState(null);

  console.log('profile', profile);

  const dispath = useDispatch();

  const [idConfig, setIdConfig] = useState({
    idProduct: null,
    idVariant: null,
  });

  const [textCmt, setTextCmt] = useState('');

  const [star, setStar] = useState('5 ');

  const getCmt = () => {
    instance
      .get(`/customer/userComment?idProduct=${id}`)
      .then((result) => {
        const comments = result.data.data.comments;
        setCmt(comments);
      })
      .catch((err) => {
        console.log('sản phẩm không tồn tại cmt');
      });
  };

  const handleSubmit = async () => {
    try {
      let data = {
        ...idConfig,
        quantity,
        price,
      };
      console.log(data.quantity);
      await dispath(addToCart(data));
      dispath(fetchCartItems());
    } catch (error) {
      console.log('thêm that bai');
    }
  };

  const handleCreateCmt = () => {
    const data = {
      idProduct: id,
      text: textCmt,
      star,
    };
    console.log(data);
    instance
      .post('/customer/userComment', data, { withCredentials: true })
      .then((result) => {
        getCmt();
      });
  };

  useEffect(() => {
    instance
      .get('/customer/getUserProfile', { withCredentials: true })
      .then((result) => {
        setProfile(result.data.data);
      });
  }, []);

  useEffect(() => {
    getCmt();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component mount lại
    setLoading(true);
    if (id) {
      instance(`/product/${id}`).then((result) => {
        setProduct(result.data.data.newObjProduct);
        console.log(result.data.data.newObjProduct.variantProducts);
        setIdConfig((prev) => ({
          idProduct:
            result.data.data.newObjProduct.variantProducts[0].variants[0]
              .idProduct,
          idVariant:
            result.data.data.newObjProduct.variantProducts[0].variants[0]
              .idVariant,
        }));
        setStockAvailable(
          result.data.data.newObjProduct.variantProducts[0].variants[0].stock,
        );
        setPrice(
          result.data.data.newObjProduct.variantProducts[0].variants[0].price,
        );
        setLoading(false);
      });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.loadingContainer}>
          <LuLoader2 />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <BBlock
        pages={[
          {
            name: 'Shop',
            path: '/shop?category=all',
          },
          {
            name: `${product && product.category}`,
          },
        ]}
      />
      <div className={styles.productWrapper}>
        <div className={styles.productImgWrapper}>
          <div className={styles.currentImg}>
            <img src={product ? product.images[imgCurrent] : null} alt="" />
          </div>
          <div className={styles.productsImageWrapper}>
            {product
              ? product.images.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={clsx(styles.imagesContainer, {
                        [styles.imgActive]: index === imgCurrent,
                      })}
                      onClick={() => {
                        setImgCurrent(index);
                      }}
                    >
                      <img src={item} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className={styles.contentProduct}>
          <h2>{product ? product.name : undefined}</h2>
          <div className={styles.startContainer}>
            <Star />
          </div>
          <div className={styles.optionsTitle}>Chose your option</div>

          <div className={styles.optionContainer}>
            <div className={styles.optionColorContainer}>
              <div>Color:</div>
              <div className={styles.optionsColor}>
                {product &&
                  product.variantProducts.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setTabOptions(index);
                          console.log('itemla', item.variants[0]);
                          setIdConfig((prev) => ({
                            ...prev,
                            idVariant: item.variants[0].idVariant,
                          }));
                          setStockAvailable(item.variants[0].stock);
                          setQuatity(1);

                          setPrice(item.variants[0].price);
                        }}
                        className={clsx('', {
                          [styles.bttActive]: index === tabOptions,
                        })}
                      >
                        {item._id}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className={styles.optionsConfigContainer}>
              <div>Config: </div>
              <div className={styles.optionsConfig}>
                {product &&
                  product.variantProducts[tabOptions].variants.map(
                    (item, index) => {
                      return (
                        <div
                          className={clsx('', {
                            [styles.bttActive]:
                              item.idVariant === idConfig.idVariant,
                          })}
                          onClick={() => {
                            setIdConfig({
                              idProduct: item.idProduct,
                              idVariant: item.idVariant,
                            });

                            setStockAvailable(item.stock);
                            setQuatity(1);

                            setPrice(item.price);
                          }}
                          key={index}
                        >
                          {item.configuration}
                        </div>
                      );
                    },
                  )}
              </div>
            </div>
          </div>

          <div className={styles.priceContainer}>
            <div>Price:</div>
            <div>{price} $</div>
          </div>
          <div className={styles.description}>
            <p>{product && product.description}</p>
          </div>
          <div className={styles.wrapperCart}>
            <div className={styles.quantityBtt}>
              <div className={styles.quantity}>
                <input type="text" value={quantity} />
                <div className={styles.buttonQuantity}>
                  <button
                    onClick={() => {
                      if (quantity >= stockAvailable) {
                        return setQuatity((prev) => prev);
                      }
                      setQuatity((prev) => prev + 1);
                    }}
                  >
                    <IoMdArrowDropup />
                  </button>
                  <button
                    onClick={() => {
                      console.log(quantity);
                      if (quantity <= 1) {
                        return setQuatity(1);
                      }
                      setQuatity((prev) => prev - 1);
                    }}
                  >
                    <IoMdArrowDropdown />
                  </button>
                </div>
              </div>

              <div className={styles.addToCart} onClick={handleSubmit}>
                Add to cart
              </div>
            </div>
            <div className={styles.quantityProduct}>
              {stockAvailable} products in stock
            </div>
            {quantity === stockAvailable && (
              <div className={styles.inStock}>
                The quantity you selected exceeds the maximum
              </div>
            )}
          </div>
          <div className={styles.IdProductShare}>
            <div className={styles.IdProduct}>
              <span>SKU:</span>
              <span>NXM4ISA78</span>
            </div>
            <div className={styles.share}>
              <span>Share:</span>
              <div>
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
              </div>
            </div>
          </div>
          <div className={styles.paymentMethods}>
            <div>Payment Method:</div>
            <div>
              <FaStripe />
              <FaCcVisa />
              <FaCcPaypal />
              <FaCcMastercard />
              <SiAmericanexpress />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.desReWrapper}>
          <div className={styles.tabMenu}>
            <div
              onClick={() => setTab('description')}
              className={clsx('', {
                [styles.tabActive]: tab === 'description',
              })}
            >
              Description
            </div>
            <div
              onClick={() => setTab('reviews')}
              className={clsx('', { [styles.tabActive]: tab === 'reviews' })}
            >
              Reviews
            </div>
          </div>
          <div
            className={styles.description}
            style={
              tab === 'description' ? { display: 'block' } : { display: 'none' }
            }
          >
            <h2>Tech Essentials: Elevate Your Experience with ElectronicZ!</h2>
            <p>
              Welcome to ElectronicZ, your ultimate destination for cutting-edge
              electronic accessories! Our curated collection boasts an array of
              premium products designed to elevate your digital experience. From
              sleek headphones delivering crisp sound to ergonomic keyboards
              ensuring seamless typing, and precision mice enhancing your gaming
              prowess, we have it all. Dive into our selection and discover the
              perfect companions for your tech lifestyle. Upgrade your setup
              with ElectronicZ today! Our commitment to quality means you can
              shop with confidence, knowing that each product in our catalog has
              been handpicked for its performance, reliability, and innovation.
              Say goodbye to outdated gadgets and hello to the future of
              electronics with ElectronicZ as your trusted partner in tech
              exploration.
            </p>
          </div>
          <div
            className={styles.review}
            style={
              tab === 'reviews' ? { display: 'flex' } : { display: 'none' }
            }
          >
            <div className={styles.userReview}>
              <div className={styles.user}>
                <div className={styles.userImg}>
                  <img
                    src={
                      profile
                        ? profile.photo
                        : 'https://static2.porn-images-xxx.com/upload/20170306/283/289163/p=305/5.jpg'
                    }
                    alt=""
                  />
                </div>

                <div className={styles.userNameDate}>
                  <h3>{profile ? profile.username : 'noname'}</h3>
                </div>
              </div>
              <div className={styles.comment}>
                <StarEvaluate setStar={setStar} />
                <input
                  type="text"
                  placeholder="write a comment"
                  value={textCmt}
                  onInput={(e) => {
                    setTextCmt(e.target.value);
                  }}
                />
              </div>
              <div className={styles.submitComment}>
                <div onClick={handleCreateCmt}>Submit</div>
              </div>
            </div>
            {cmt.map((item, index) => {
              const date = new Date(item.date);
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              console.log(item.idUser.photo);
              return (
                <>
                  {' '}
                  <div className={styles.userReview} key={index}>
                    <div className={styles.user}>
                      <div className={styles.userImg}>
                        <img src={item.idUser.photo} alt="" />
                      </div>

                      <div className={styles.userNameDate}>
                        <h3>{item.idUser.username}</h3>
                        <p>
                          {day}/{month}/{year}
                        </p>
                        <StarEvaluate value={item.star} />
                      </div>
                    </div>
                    <div className={styles.comment}>{item.text}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
