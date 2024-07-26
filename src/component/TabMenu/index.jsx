import styles from './TabMenu.module.scss';

import clsx from 'clsx';

import { CiHeadphones } from 'react-icons/ci';
import { listForTab } from '`/ListProducts';

import { useState, useEffect } from 'react';

import ProductCart from '../ProductCar';

import instance from '`/apiConfig';

function TabMenu() {
  const [tabIndex, setIndex] = useState(0);
  const [content, setContent] = useState([]);

  useEffect(() => {
    instance.get('/product/tabContent').then((data) => {
      setContent(data.data.data.limitedProducts);
    });
  }, []);
  return (
    <div className={styles.tabMenuWrapper}>
      <div className={styles.tabMenu}>
        {listForTab.map((item, index) => {
          return (
            <div
              onClick={() => {
                setIndex(index);
              }}
              className={clsx(styles.tabItem, {
                [styles.tabActive]: index === tabIndex,
              })}
              key={index}
            >
              {item.icon}
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.tabContent}>
        {/* {content[tabIndex].products.length > 0
          // ? content[tabIndex].products.map((item, index) => {
          //    
          //   })
          
          // : null} */}
        {content[tabIndex]?.products.map((item, index) => {
          return (
            <div key={index} className={styles.content}>
              <ProductCart flexRow data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabMenu;
