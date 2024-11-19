import styles from './ItemProduct.module.scss';

import { IoWatchOutline } from 'react-icons/io5';

import { useDispatch } from 'react-redux';
import { setValue } from '`/Reducer/searchReducer/searchSlice';

import { Link } from 'react-router-dom';

function ItemProduct({ icon, title }) {
  const dispatch = useDispatch();

  return (
    <Link
      to={'/shop'}
      onClick={() => {
        dispatch(
          setValue({
            // eslint-disable-next-line react/prop-types
            value: title.toLowerCase(),
            findBy: 'category',
          }),
        );
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>{icon}</div>
        <div className={styles.tilte}>{title}</div>
      </div>
    </Link>
  );
}

export default ItemProduct;
