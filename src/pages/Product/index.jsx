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
import { FaUser } from 'react-icons/fa';

import Star from '`/component/Star';
import StarEvaluate from '`/component/StarEvaluate';
import BBlock from '`/component/BreadcrumbBlock';

import { useEffect } from 'react';

import instance from '`/apiConfig';

import { useParams } from 'react-router-dom';

import clsx from 'clsx';

// const product = {
//   images: [
//     'https://product.hstatic.net/200000722513/product/thumbtainghe_2dabdc1c9373434ab81022d11552600c_a27bc61bd0564a69b22b79b5c08aa857_1024x1024.png',
//     'https://product.hstatic.net/200000722513/product/tai-nghe-razer-barracuda-x-2022-5_4e32c8395f2e4a908182de7be63375b6_5eb98aba178c40c9bc2041a0b9350489_grande.jpg',
//     'https://product.hstatic.net/200000722513/product/tai-nghe-razer-barracuda-x-2022-4_aec8d51f27a44546a6a31fc6b30e2b55_589dc33f899b4239a53d230475482c91_grande.jpg',
//     'https://product.hstatic.net/200000722513/product/tai-nghe-razer-barracuda-x-2022-8_78bc27df494d471ab4287e3d453d56cd_8508e93ea208476f969652122d2f30b0_grande.jpg',
//   ],
// };

function Product(props) {
  const [imgCurrent, setImgCurrent] = useState(0);
  const [tab, setTab] = useState('description');

  const [product, setProduct] = useState(null);
  console.log(product);
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component mount lại
    if (id) {
      instance(`/product/${id}`).then((result) => {
        setProduct(result.data.data.product);
      });
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <BBlock
        pages={[
          {
            name: 'Shop',
            path: '/shop',
          },
          {
            name: 'Razer Headphone',
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
          <h2>Headphone</h2>
          <div className={styles.startContainer}>
            <Star />
          </div>
          <div className={styles.priceContainer}>
            <div style={{ color: 'var(--main-color-primary)' }}>
              $ 80.00 USD
            </div>
            <div>$ 80.00 USD</div>
          </div>
          <div className={styles.description}>
            <p>
              Effect font move vertical share. Connection frame edit export
              arrow. Undo device move opacity image layer. List star blur
              strikethrough arrow.
            </p>
          </div>

          <div className={styles.wrapperCart}>
            <div className={styles.quantityBtt}>
              <div className={styles.quantity}>
                <input type="text" value={1} />
                <div className={styles.buttonQuantity}>
                  <button>
                    <IoMdArrowDropup />
                  </button>
                  <button>
                    <IoMdArrowDropdown />
                  </button>
                </div>
              </div>
              <div>Add to cart</div>
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
