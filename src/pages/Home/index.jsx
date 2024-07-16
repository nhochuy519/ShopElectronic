import styles from './Home.module.scss';
import SlideShow from '`/component/SlideShow';

import ListContainer from '`/component/ListContainer';
import ProductBar from '`/component/ProductBar';
import ProductCartContainer from '`/component/ProductCartContainer';
import BannerAndSlider from '`/component/BannerAndSlider';
import TabMenu from '`/component/TabMenu';
import Review from '`/component/Review';
import MobileBanner from '`/component/MobileBanner';

import instance from '`/apiConfig';

import { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance.get('/product/mainPage').then((result) => {
      setProducts(result.data.data);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <section>
        <SlideShow />
      </section>
      <section>
        <ListContainer />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}>
        <ProductBar
          title={'Lastest'}
          firstText={'Product'}
          secondText={'Headphones'}
          thirdText={'Speakers'}
        />
        <ProductCartContainer data={products.lastest} />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}>
        <BannerAndSlider data={products.headphoneBanner} />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}>
        <ProductBar
          title={'Most Selling'}
          firstText={'Gadgets'}
          secondText={'Mouse'}
          thirdText={'Headphones'}
        />
        <ProductCartContainer twoColumns flexRow data={products.mostSelling} />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}>
        <BannerAndSlider bannerSecond data={products.headphoneBanner} />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}>
        <ProductBar
          title={'Featured'}
          firstText={'Gadgets'}
          secondText={'Mouse'}
          thirdText={'Headphones'}
        />
        <TabMenu />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}>
        <Review />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}>
        <MobileBanner />
      </section>
    </div>
  );
}

export default Home;
