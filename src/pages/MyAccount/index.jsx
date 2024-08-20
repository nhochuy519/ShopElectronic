import styles from './myAccount.module.scss';

import BBlock from '`/component/BreadcrumbBlock';
import { FaPen } from 'react-icons/fa';

import CategoriesItem from '`/component/CategoriesItem';

import { listUserAccount } from '`/ListProducts';

import { LuPencilLine } from 'react-icons/lu';
import { MdErrorOutline } from 'react-icons/md';

import { useState } from 'react';

import clsx from 'clsx';

import TabItemProfile from './Tab';

import { useEffect } from 'react';
import instance from '`/apiConfig';

function MyAccount() {
  const [tab, setTab] = useState(0);

  const [islogged, setlogin] = useState(false);

  const TabContent = TabItemProfile[tab].comp;

  const [user, setUser] = useState(null);

  useEffect(() => {
    instance
      .get('/customer/getUserProfile')
      .then((result) => {
        const data = result.data.data;
        setUser(data);
        setlogin(true);
      })
      .catch((err) => {
        console.log(err);
        setlogin(false);
      });
  }, []);

  if (!islogged) {
    return (
      <div className={styles.errMyaccont}>
        <MdErrorOutline />
        <div> You are not logged in yet</div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileWrapper}>
        <BBlock
          pages={[
            {
              name: 'Profile',
              path: '/my-account',
            },
          ]}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.tabContent}>
            <div className={styles.userProfile}>
              <img
                src={
                  user
                    ? user.photo
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s'
                }
                alt="profileImgae"
              />
              <div className={styles.name}>
                <div>
                  <p>Hello</p>
                  <p className={styles.nameUser}>
                    {user ? user.username : 'no name'}
                  </p>
                </div>
                <FaPen />
              </div>
            </div>
            <div className={styles.tabList}>
              {listUserAccount.map((item, index) => {
                const className = clsx(styles.tabItem, {
                  [styles.tabActive]: index === tab,
                });
                return (
                  <div
                    className={className}
                    key={index}
                    onClick={() => {
                      setTab(index);
                    }}
                  >
                    <CategoriesItem
                      hover={index === tab && true}
                      title={item.name}
                      Icon={item.icon}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <TabContent />
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
