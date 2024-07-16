import { useState } from 'react';
import styles from './Star.module.scss';

import { IoIosStar } from 'react-icons/io';
// eslint-disable-next-line react/prop-types

import clsx from 'clsx';

const star = [1, 2, 3, 4, 5];
function StarEvaluate({ style }) {
  const [numStar, setNumStar] = useState(5);

  return (
    <div className={styles.starWrapper} style={style}>
      {star.map((item, index) => {
        return (
          <IoIosStar
            className={clsx('', {
              [styles.starActive]: index <= numStar,
            })}
            key={index}
            onClick={() => {
              setNumStar(index);
            }}
          />
        );
      })}
    </div>
  );
}

export default StarEvaluate;
