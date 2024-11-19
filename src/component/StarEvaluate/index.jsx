import { useState } from 'react';
import styles from './Star.module.scss';

import { IoIosStar } from 'react-icons/io';
// eslint-disable-next-line react/prop-types

import clsx from 'clsx';

const star = [1, 2, 3, 4, 5];
function StarEvaluate({ style, setStar, value = false }) {
  const [numStar, setNumStar] = useState(value || 5);

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
              if (!value) {
                setNumStar(index);
                setStar(index + 1);
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default StarEvaluate;
