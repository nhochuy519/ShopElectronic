import styles from './Star.module.scss';

import { IoIosStar } from 'react-icons/io';
// eslint-disable-next-line react/prop-types
function Star({ style }) {
  return (
    <div className={styles.starWrapper} style={style}>
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
    </div>
  );
}

export default Star;
