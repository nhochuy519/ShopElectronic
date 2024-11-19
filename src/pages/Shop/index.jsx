import BBlock from '`/component/BreadcrumbBlock';
import styles from './Shop.module.scss';
import { IoSearch } from 'react-icons/io5';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { TfiLayoutListThumb } from 'react-icons/tfi';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { clsx } from 'clsx';

import { useState, useEffect } from 'react';

import ProductCart from '`/component/ProductCar';
import { ListProducts, brands } from '`/ListProducts';

import { Pagination } from '@mui/material';

import instance from '`/apiConfig';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setValue } from '`/Reducer/searchReducer/searchSlice';
import { values } from 'lodash';

function Shop() {
  const filter = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [reRender, setReRender] = useState(false);

  const [layout, setLayout] = useState('column');

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  // const [filter, setFilter] = useState({
  //   value: value,
  //   findBy: 'category',
  // });

  useEffect(() => {
    console.log(filter);
  }, [reRender]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(
        setValue({
          value: e.target.value,
          findBy: 'name',
        }),
      );
    }
  };

  useEffect(() => {
    if (filter.value === 'all') {
      instance.get('/product').then((result) => {
        setTotalPages(Math.ceil(result.data.length / 9));
      });
    }
  }, [filter, page]);

  useEffect(() => {
    setLoading(true);
    let url;
    if (filter.value === 'all') {
      url = `/product?limit=9&page=${page}`;
    } else {
      if (filter.findBy === 'category') {
        url = `/product?limit=9&page=${page}&category=${filter.value}`;
      } else {
        url = `/product?limit=9&page=${page}&name=${filter.value}`;
      }
    }
    console.log(url);
    instance.get(url).then((result) => {
      if (filter.value !== 'all') {
        setTotalPages(Math.ceil(result.data.length / 9));
      }

      setProducts(result.data.data.products);
      setLoading(false);
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
            <input
              type="text"
              placeholder="Search..."
              onKeyPress={handleSearch}
            />
            <div className={styles.searchBtt}>
              <IoSearch
                onClick={() => {
                  handleSearch;
                }}
              />
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.title}>
              <div>Categories</div>
              <div
                onClick={() => {
                  dispatch(
                    setValue({
                      value: 'all',
                    }),
                  );
                  // setFilter({ value: 'all' });
                }}
              >
                clear
              </div>
            </div>
            <div className={styles.lists}>
              {ListProducts.map((item, index) => {
                return (
                  <Link
                    style={
                      filter.value === item.name.toLowerCase()
                        ? { color: 'var(--main-color-primary)' }
                        : {}
                    }
                    to={`/shop`}
                    key={index}
                    onClick={() => {
                      if (page !== 1) {
                        setPage(1);
                      }
                      console.log(item.name.toLowerCase());
                      dispatch(
                        setValue({
                          value: item.name.toLowerCase(),
                          findBy: 'category',
                        }),
                      );
                      setReRender((prev) => !prev);
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
            {loading ? (
              <div className={styles.loadingPage}>
                <AiOutlineLoading3Quarters />
              </div>
            ) : (
              products.map((item, index) => {
                return (
                  <ProductCart
                    flexRow={layout === 'row' ? true : false}
                    key={index}
                    data={item}
                  />
                );
              })
            )}
          </div>
          <div className={styles.wrapperPagination}>
            <Pagination
              selected
              page={page}
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
