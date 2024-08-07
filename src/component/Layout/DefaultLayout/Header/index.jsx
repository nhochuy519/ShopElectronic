import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import Marquee from 'react-fast-marquee';

import { GoSearch } from 'react-icons/go';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { LuUser2 } from 'react-icons/lu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsCart3 } from 'react-icons/bs';

import MarqueeItem from '`/component/MarqueeItem';

import NavList from '`/component/NavList';
import Pages from '`/LinkPage';
import ContainerCategories from '`/component/ContainerCateItems';

import Tippy from '@tippyjs/react/headless';

import { useEffect, useRef, useState, useCallback } from 'react';

import instance from '`/apiConfig';

import lodash from 'lodash';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Cookie from 'universal-cookie';

function Header() {
  const [user, setUser] = useState(null);
  const valueSeach = useSelector((state) => state.search);

  useEffect(() => {
    console.log(valueSeach);
  }, [valueSeach]);

  const navigate = useNavigate();
  const classNames = clsx(styles.marqueeContainer);

  const categories = useRef(null);

  const [value, setValue] = useState('');
  const [product, setProducts] = useState();

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      navigate('/shop');
      setValue('');
    }
  };

  const handleLogOut = () => {
    instance
      .post('/customer/logOut', {}, { withCredentials: true })
      .then(() => {
        console.log('đăng xuất thành công');
        setUser(null);
      })
      .catch(() => {});
  };

  useEffect(() => {
    instance
      .get('/customer/getUserProfile')
      .then((result) => {
        console.log(result);
        setUser(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const callApi = (value) => {
    instance.get(`/product?name=${value}&limit=5`).then((result) => {
      console.log('callapi');
      console.log(result.data.data.products);
      setProducts(result.data.data.products);
    });
  };

  const debounce = useCallback(lodash.debounce(callApi, 1000), []);

  useEffect(() => {
    if (value) {
      debounce(value);
    }
  }, [value]);

  const handleScroll = () => {
    if (window.pageYOffset > categories.current.offsetTop) {
      categories.current.style.position = 'fixed';
      categories.current.style.top = '0';
    } else {
      categories.current.style.position = 'relative';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className={classNames}>
        <Marquee direction={'right'} speed={80}>
          <div className={styles.firstItemMarquee}>
            <MarqueeItem />
            <MarqueeItem />
          </div>
          <MarqueeItem />
          <MarqueeItem />
        </Marquee>
      </div>
      {/** phần nav */}
      <div className={styles.topNavigation}>
        <nav className={styles.navContainer}>
          <Link to={'/'}>
            <div className={styles.logoShop}>
              <img src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/6613a025a95f59c73e5d74d6_ELECTRONICZ.webp" />
            </div>
          </Link>

          <div className={styles.searchContainer}>
            <input
              value={value}
              placeholder="What are you looking for?"
              onInput={(e) => {
                setValue(e.target.value);
              }}
              onKeyPress={handlePressEnter}
            />
            <button>
              <GoSearch
                style={{
                  fontSize: '1.7rem',
                }}
              />
            </button>
            <div
              className={clsx(styles.searchResult, {
                [styles.searchResultActive]: value,
              })}
            >
              {product
                ? product.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/product/${item._id}`}
                        onClick={() => {
                          setValue('');
                          setProducts();
                        }}
                      >
                        <div className={styles.result}>
                          <div>{item.name}</div>
                          <div className={styles.imageResult}>
                            <img src={item.images[0]} alt="product" />
                          </div>
                        </div>
                      </Link>
                    );
                  })
                : null}
            </div>
          </div>
          <div className={styles.helpAndUser}>
            <div>
              <TfiHeadphoneAlt
                style={{
                  fontSize: '5rem',
                }}
              />
              <div className={styles.contactHelp}>
                <p>NEED HELP?</p>
                <strong>0123-456-789</strong>
              </div>
            </div>

            <div className={styles.userIcon}>
              {user ? (
                <Tippy
                  render={(attrs) => (
                    <div className={styles.dropMenu} {...attrs}>
                      <div>{user.email}</div>
                      <Link to={'/my-account'}>My account</Link>

                      <div onClick={handleLogOut}>Log out</div>
                    </div>
                  )}
                  zIndex={10000}
                  placement="bottom"
                  interactive={true}
                >
                  <img className={styles.imgUser} src={user.photo} alt="" />
                </Tippy>
              ) : (
                <a href="/login" style={{ color: 'black' }}>
                  <LuUser2
                    style={{
                      fontSize: '3rem',
                    }}
                  />
                </a>
              )}
            </div>
            <div className={styles.cartIcon}>
              <a href="/login" style={{ color: 'black' }}>
                <BsCart3
                  style={{
                    fontSize: '3rem',
                  }}
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/** kết thúc*/}

      {/* phần categories */}
      <div className={styles.wrapperCategories} ref={categories}>
        <div className={styles.containerCategories}>
          <div>
            <div>
              <ContainerCategories />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.navListContainer}>
              {Pages.map((item, index) => {
                let Comp = 'div';
                const props = {};
                if (item.children) {
                  Comp = Tippy;
                  props.render = (attrs) => (
                    <div
                      className={styles.pageContainer}
                      tabIndex="-1"
                      {...attrs}
                    >
                      {item.children.map((child, index) => (
                        <div key={index}>
                          <Link to={child.patch}>{child.name}</Link>
                        </div>
                      ))}
                    </div>
                  );

                  props.zIndex = 999;
                  props.interactive = true;
                  props.placement = 'bottom';
                }
                return (
                  <Comp key={index} {...props}>
                    <NavList
                      title={item.name}
                      borderBottom
                      arrow={item.children ? true : false}
                    />
                  </Comp>
                );
              })}
            </div>
            <div className={styles.divider}></div>
            <div className={styles.offerContainer}>
              <Link to={'/on-sale'}>
                <p>Ongoing Offers</p>
              </Link>

              <div className={styles.tagSaleContainer}>
                <img
                  src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/6615696b4e79e91d2232e82c_play.webp"
                  alt=""
                />
                <div>
                  <p>Sale</p>
                </div>
              </div>

              <GiHamburgerMenu
                fontSize={22}
                className={styles.hamIconContainer}
              />
            </div>
          </div>
        </div>
      </div>

      {/* kết thúc categories */}
    </header>
  );
}

export default Header;
