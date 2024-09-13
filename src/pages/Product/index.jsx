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

import clsx from 'clsx';

function Product(props) {
  const { id } = useParams();
  const [imgCurrent, setImgCurrent] = useState(0);
  const [tab, setTab] = useState('description');

  const [product, setProduct] = useState(null);

  const [isLoading, setLoading] = useState(false);

  const [currentIndexTab, setIndex] = useState(0);
  const [kindIndex, setKindIndex] = useState(0);

  const [stockAvailable, setStockAvailable] = useState(0);

  const [price, setPrice] = useState({ basePrice: null, priceDiscount: null });

  const [quantity, setQuatity] = useState(1);

  const [optionProduct, setOptionProduct] = useState({
    idProduct: id,
    idColor: null,
    idKind: null,
    quantity: null,
  });

  const handleAddToCart = () => {
    console.log(optionProduct);
  };
  useEffect(() => {
    console.log(optionProduct);
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component mount lại
    setLoading(true);
    if (id) {
      instance(`/product/${id}`).then((result) => {
        setProduct(result.data.data.product);
        setLoading(false);
        // const allPrice =
        //   result.data.data.product.classify[currentIndexTab].kind[0];
        // setPrice({
        //   basePrice: allPrice.price,
        //   priceDiscount: allPrice.priceDiscount,
        // });

        // setOptionProduct({
        //   idProduct: id,
        //   idColor: result.data.data.product.classify[currentIndexTab]._id,
        //   idKind:
        //     result.data.data.product.classify[currentIndexTab].kind[kindIndex]
        //       ._id,
        //   quantity: quantity,
        // });
        // setStockAvailable(
        //   result.data.data.product.classify[currentIndexTab].kind[kindIndex]
        //     .quantity,
        // );
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
          {/* {product && product.classify && (
            <div className={styles.classify}>
              <div className={styles.colorProducts}>
                <span>Color :</span>
                {product &&
                  product.classify.map((item, index) => {
                    return (
                      <div
                        className={clsx('', {
                          [styles.bttActive]:
                            item._id === optionProduct.idColor,
                        })}
                        key={index}
                        onClick={() => {
                          setIndex(index);

                          setOptionProduct((prev) => ({
                            ...prev,
                            idColor: item._id,
                            idKind: item.kind[0]._id,
                            quantity: 1,
                          }));
                          setStockAvailable(item.kind[0].quantity);
                        }}
                      >
                        {item.color}
                      </div>
                    );
                  })}
              </div>
              <div className={styles.configuration}>
                {product &&
                  product.classify[currentIndexTab].kind.map((item, index) => {
                    if (item.configuration)
                      return (
                        <div
                          className={clsx('', {
                            [styles.bttActive]:
                              item._id === optionProduct.idKind,
                          })}
                          key={index}
                          onClick={() => {
                            setPrice({
                              basePrice: item.price,
                              priceDiscount: item.priceDiscount,
                            });
                            setOptionProduct((prev) => ({
                              ...prev,
                              idKind: item._id,
                            }));
                            setStockAvailable(item.quantity);
                          }}
                        >
                          {item.configuration}
                        </div>
                      );
                  })}
              </div>
            </div>
          )} */}

          <div className={styles.priceContainer}>
            {/* <div style={{ color: 'var(--main-color-primary)' }}>
              <div style={{ color: 'black', fontWeight: 'bold' }}>Price:</div>
              {price.priceDiscount ? (
                <div>
                  {' '}
                  <div
                    style={{ textDecoration: 'line-through', color: 'gray' }}
                  >
                    {price.basePrice}${' -'}
                  </div>
                  <div>{price.priceDiscount}$</div>
                </div>
              ) : (
                <div> {price.basePrice} $</div>
              )}
            </div> */}
          </div>
          <div className={styles.description}>
            <p>{product && product.description}</p>
          </div>
          <div className={styles.wrapperCart}>
            <div className={styles.quantityBtt}>
              <div className={styles.quantity}>
                <input type="text" value={optionProduct.quantity} />
                <div className={styles.buttonQuantity}>
                  <button
                    onClick={() => {
                      // setOptionProduct((prev) => ({
                      //   ...prev,
                      //   quantity:
                      //     prev.quantity === stockAvailable
                      //       ? prev.quantity
                      //       : prev.quantity + 1,
                      // }));
                    }}
                  >
                    <IoMdArrowDropup />
                  </button>
                  <button
                    onClick={() => {
                      // setOptionProduct((prev) => ({
                      //   ...prev,
                      //   quantity: prev.quantity <= 1 ? 1 : prev.quantity - 1,
                      // }));
                    }}
                  >
                    <IoMdArrowDropdown />
                  </button>
                </div>
              </div>

              <div className={styles.addToCart} onClick={handleAddToCart}>
                Add to cart
              </div>
            </div>
            <div className={styles.quantityProduct}>
              {stockAvailable} products in stock
            </div>
            <div
              className={styles.inStock}
              style={
                optionProduct.quantity === stockAvailable
                  ? { display: 'block' }
                  : { display: 'none' }
              }
            >
              The quantity you selected exceeds the maximum
            </div>
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
                    src="https://static2.porn-images-xxx.com/upload/20170306/283/289163/p=305/5.jpg"
                    alt=""
                  />
                </div>

                <div className={styles.userNameDate}>
                  <h3>Nishinomiya Konomi</h3>
                </div>
              </div>
              <div className={styles.comment}>
                <StarEvaluate />
                <input type="text" placeholder="write a comment" />
              </div>
              <div className={styles.submitComment}>
                <div>Submit</div>
              </div>
            </div>
            <div className={styles.userReview}>
              <div className={styles.user}>
                <div className={styles.userImg}>
                  <img
                    src="https://static2.porn-images-xxx.com/upload/20170306/283/289163/p=305/5.jpg"
                    alt=""
                  />
                </div>

                <div className={styles.userNameDate}>
                  <h3>Nishinomiya Konomi</h3>
                  <p>May 15, 2024</p>
                </div>
              </div>
              <div className={styles.comment}>
                I recently purchased a new laptop and some accessories from
                ElectronicZ, and I must say, I'm thoroughly impressed with both
                the range of products they offer and the quality of their
                service. The website was easy to navigate, making it simple to
                find exactly what I was looking for. The prices were
                competitive, and the checkout process was smooth. What stood out
                to me the most, however, was the exceptional customer service. I
                had a few questions about the specifications of the laptop I was
                interested in, and the customer support team was quick to
                respond and incredibly helpful. They provided me with all the
                information I needed to make an informed decision.
              </div>
            </div>
            <div className={styles.userReview}>
              <div className={styles.user}>
                <div className={styles.userImg}>
                  <img
                    src="https://static2.porn-images-xxx.com/upload/20170306/283/289163/p=305/5.jpg"
                    alt=""
                  />
                </div>

                <div className={styles.userNameDate}>
                  <h3>Nishinomiya Konomi</h3>
                  <p>May 15, 2024</p>
                </div>
              </div>
              <div className={styles.comment}>
                I recently purchased a new laptop and some accessories from
                ElectronicZ, and I must say, I'm thoroughly impressed with both
                the range of products they offer and the quality of their
                service. The website was easy to navigate, making it simple to
                find exactly what I was looking for. The prices were
                competitive, and the checkout process was smooth. What stood out
                to me the most, however, was the exceptional customer service. I
                had a few questions about the specifications of the laptop I was
                interested in, and the customer support team was quick to
                respond and incredibly helpful. They provided me with all the
                information I needed to make an informed decision.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
