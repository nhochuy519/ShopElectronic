import styles from './FeaturedCard.module.scss';

import clsx from 'clsx';

import Star from '../Star';
import { FaCartPlus } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

import { useEffect, useState } from 'react';

const products = [
  {
    images: [
      'https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi-p-1080.webp',
      'https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/66202d19a134566caa693607_452-p-800.webp',
      'https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/66202cb09da9326670ac2492_12559-p-800.webp',
      'https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/66202cb322138ddb7776f5d8_3528-p-800.webp',
    ],
  },
  {
    images: [
      'https://product.hstatic.net/200000722513/product/thumbtainghe_2dabdc1c9373434ab81022d11552600c_a27bc61bd0564a69b22b79b5c08aa857_1024x1024.png',
      'https://product.hstatic.net/200000722513/product/tai-nghe-razer-barracuda-x-2022-5_4e32c8395f2e4a908182de7be63375b6_5eb98aba178c40c9bc2041a0b9350489_grande.jpg',
      'https://product.hstatic.net/200000722513/product/tai-nghe-razer-barracuda-x-2022-4_aec8d51f27a44546a6a31fc6b30e2b55_589dc33f899b4239a53d230475482c91_grande.jpg',
      'https://product.hstatic.net/200000722513/product/tai-nghe-razer-barracuda-x-2022-8_78bc27df494d471ab4287e3d453d56cd_8508e93ea208476f969652122d2f30b0_grande.jpg',
    ],
  },
];

function FeaturedCard({ data }) {
  const [product, setProduct] = useState(products[0]);
  const [tabContentImg, setTabContentImg] = useState(0);
  const [indexPr, setIndexPr] = useState(0);

  useEffect(() => {
    if (data) {
      setProduct(data[0]);
    }
  }, [data]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.featuredThumnail}>
        <div className={styles.featuredTab}>
          <div className={styles.thumnailWrapper}>
            {product.images.length > 0
              ? product.images.map((item, index) => {
                  return (
                    <div
                      style={
                        tabContentImg === index
                          ? { borderColor: 'var(--main-color-primary)' }
                          : { borderColor: 'var(--1-main-colors--border)' }
                      }
                      key={index}
                      onClick={() => {
                        setTabContentImg(index);
                      }}
                    >
                      <img src={item} alt="" />
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.tabContent}>
            <img src={product.images[tabContentImg]} alt="" />
          </div>
        </div>

        <div className={styles.addToCart}>
          <div className={styles.cart}>
            <FaCartPlus />
          </div>
          <div className={styles.eye}>
            <IoEyeSharp />
          </div>
        </div>
      </div>
      <div className={styles.featuredInfo}>
        <div className={styles.title}>White Headphone</div>
        <Star />
        <div className={styles.price}>$ 150.00 USD</div>
        <div className={styles.description}>
          Effect font move vertical share. Connection frame edit export arrow.
          Undo device move opacity image layer. List star blur strikethrough
          arrow.
        </div>
        <div className={styles.idProduct}>
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
        </div>
        <div className={styles.bttWrapper}>
          <div>Add to Cart</div>
        </div>
      </div>
      <div className={styles.sliderNav}>
        {products.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setProduct(data[index]);
                setTabContentImg(0);
                setIndexPr(index);
              }}
              className={clsx('btt', {
                [styles.active]: indexPr === index,
              })}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedCard;
