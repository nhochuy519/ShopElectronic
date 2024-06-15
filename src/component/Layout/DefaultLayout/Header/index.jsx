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

function Header() {
  const classNames = clsx(styles.marqueeContainer);
  console.log('re-render');
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
            <input placeholder="What are you looking for?" />
            <button>
              <GoSearch
                style={{
                  fontSize: '1.7rem',
                }}
              />
            </button>
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
              <a href="/login" style={{ color: 'black' }}>
                <LuUser2
                  style={{
                    fontSize: '3rem',
                  }}
                />
              </a>
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
      <div className={styles.wrapperCategories}>
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
