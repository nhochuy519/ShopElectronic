import styles from './MarqueItem.module.scss';
import { FaBoltLightning } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
function MarqueeItem() {
  return (
    <div className={styles.marqueeItem}>
      <FaBoltLightning />
      <span>
        Flat 30 % Sale Going On Selected Products.{' '}
        <Link to="/on-sale">VIEW PRODUCTS.</Link>
      </span>
    </div>
  );
}

export default MarqueeItem;
