import styles from './MobileBanner.module.scss';

import Button from '../Button';

function MobileBanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mobileBanner}>
        <div className={styles.content}>
          <h2>Celebrate July with Discounts on All Phone Accessories!</h2>
          <Button
            title={'Shop Product Now'}
            background={`var(--main-color-primary)`}
            borderColor={'2px solid var(--main-color-primary)'}
            textColor={'white'}
            hoverTextColor={'white'}
          />
        </div>
        <div className={styles.headPhoneContainer}>
          <img
            className={styles.headPhone}
            src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/66156bc23d283d4dae0ae8ea_wepik-export-202404081735405VzB-p-500.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MobileBanner;
