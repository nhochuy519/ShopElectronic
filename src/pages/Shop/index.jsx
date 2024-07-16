import BBlock from '`/component/BreadcrumbBlock';
import styles from './Shop.module.scss';
import { IoSearch } from 'react-icons/io5';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { TfiLayoutListThumb } from 'react-icons/tfi';
import { AiOutlineAppstore } from 'react-icons/ai';

import { clsx } from 'clsx';

import { useState } from 'react';

import ProductCart from '`/component/ProductCar';
import { ListProducts, brands } from '`/ListProducts';

import { Pagination, PaginationItem } from '@mui/material';

function Shop() {
  const [layout, setLayout] = useState('column');
  return (
    <div className={styles.wrapper}>
      <BBlock
        pages={[
          {
            name: 'Shop',
            path: '/shop',
          },
        ]}
      />
      <div className={styles.content}>
        <div className={styles.categoriesContainer}>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search..." />
            <div className={styles.searchBtt}>
              <IoSearch />
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.title}>Categories</div>
            <div className={styles.lists}>
              {ListProducts.map((item, index) => {
                return (
                  <Link to={`/shop/${item.name.toLowerCase()}`} key={index}>
                    <div className={styles.list}>
                      <div>{item.name}</div>

                      <div className={styles.arrow}>
                        <FaRegArrowAltCircleRight />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.title}>Categories</div>
            <div className={styles.lists}>
              {brands.map((item, index) => {
                return (
                  <Link to={`/shop/${item.name.toLowerCase()}`} key={index}>
                    <div className={styles.list}>
                      <div>{item.name}</div>

                      <div className={styles.arrow}>
                        <FaRegArrowAltCircleRight />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.products}>
          <div className={styles.filter}>
            <div>Showing Result</div>
            <div>
              <AiOutlineAppstore
                style={
                  layout === 'column'
                    ? { color: 'var(--main-color-primary)' }
                    : {}
                }
                onClick={() => setLayout('column')}
              />
              <TfiLayoutListThumb
                style={
                  layout === 'row' ? { color: 'var(--main-color-primary)' } : {}
                }
                onClick={() => setLayout('row')}
              />
            </div>
          </div>
          <div
            className={clsx(styles.showProducts, {
              [styles.showProductsCl]: layout === 'column',
            })}
          >
            {[0, 1, 2, 4].map((item, index) => {
              return (
                <ProductCart
                  flexRow={layout === 'row' ? true : false}
                  key={index}
                />
              );
            })}
          </div>
          <div className={styles.wrapperPagination}>
            <Pagination
              selected
              count={10}
              size={'large'}
              onChange={(e, item) => {
                console.log(item);
              }}
              sx={{
                '& .MuiPaginationItem-root': {
                  fontSize: '1.8rem', // Ghi đè kích thước font
                  fontWeight: 600, // Ghi đè độ đậm của font
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
