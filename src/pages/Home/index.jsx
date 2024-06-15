import styles from './Home.module.scss';
import SlideShow from '`/component/SlideShow';

import ListContainer from '`/component/ListContainer';
import ProductBar from '`/component/ProductBar';
import ProductCartContainer from '`/component/ProductCartContainer';

function Home() {
  return (
    <div className={styles.wrapper}>
      <section>
        <SlideShow />
      </section>
      <section>
        <ListContainer />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}>
        <ProductBar />
        <ProductCartContainer />
      </section>
      <section style={{ margin: '70px 0 70px 0' }}></section>
    </div>
  );
}

export default Home;
