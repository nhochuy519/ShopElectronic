import styles from './Banner.module.scss';

function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.deals}>
        <div>Monthy Deals</div>
        <h2>Latest Headphones</h2>
      </div>
      <div className={styles.bannerImg}>
        <img
          src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/66156bc221d2de40030d54be_wepik-export-20240408173119hqvi-p-1080.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
