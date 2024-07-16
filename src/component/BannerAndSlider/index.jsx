import styles from './BannerAndSlider.module.scss';

import Banner from '../Banner';
import FeaturedCard from '../FeaturedCard';

import clsx from 'clsx';

function BannerAndSlider({ bannerSecond, data }) {
  const className = clsx(styles.wrapper, {
    [styles.bannerSecond]: bannerSecond,
  });
  return (
    <div className={className}>
      <Banner />
      <FeaturedCard data={data ? data : null} />
    </div>
  );
}

export default BannerAndSlider;
