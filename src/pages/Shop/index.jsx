import BBlock from '`/component/BreadcrumbBlock';
import styles from './Shop.module.scss';
import { IoSearch } from 'react-icons/io5';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { TfiLayoutListThumb } from 'react-icons/tfi';
import { AiOutlineAppstore } from 'react-icons/ai';

import { clsx } from 'clsx';

import { useState, useEffect } from 'react';

import ProductCart from '`/component/ProductCar';
import { ListProducts, brands } from '`/ListProducts';

import { Pagination, PaginationItem } from '@mui/material';

import instance from '`/apiConfig';

function Shop() {
  const [layout, setLayout] = useState('column');

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    instance.get(`/product`).then((result) => {
      setTotalPages(Math.ceil(result.data.length / 9));
    });
  }, []);

  useEffect(() => {
    let url = `/product?limit=9&page=${page}`;
    if (filter) {
      url = `/product?limit=9&page=${page}&category=${filter}`;
    }
    console.log(url);
    instance.get(url).then((result) => {
      console.log(result.data.data.products);
      setProducts(result.data.data.products);
    });
  }, [page, filter]);

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
                  <Link
                    style={
                      filter === item.name.toLowerCase()
                        ? { color: 'var(--main-color-primary)' }
                        : {}
                    }
                    to={`/shop/${item.name.toLowerCase()}`}
                    key={index}
                    onClick={() => {
                      setFilter(item.name.toLowerCase());
                    }}
                  >
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
            {products
              ? products.map((item, index) => {
                  return (
                    <ProductCart
                      flexRow={layout === 'row' ? true : false}
                      key={index}
                      data={item}
                    />
                  );
                })
              : null}
          </div>
          <div className={styles.wrapperPagination}>
            <Pagination
              selected
              count={totalPages ? totalPages : 0}
              size={'large'}
              onChange={(e, item) => {
                window.scrollTo(0, 0);
                setPage(item);
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
