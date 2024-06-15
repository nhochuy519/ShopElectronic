import styles from './CategoriesItem.module.scss';

import { Link } from 'react-router-dom';

import { forwardRef } from 'react';
import 'tippy.js/dist/tippy.css'; // optional

function CategoriesItem({ Icon, title, patchName }, ref) {
  const props = {};
  let Comp = 'div';
  if (patchName) {
    Comp = Link;
    props.to = `/category/${patchName}`;
  }

  return (
    <Comp {...props} className={styles.linkPage}>
      <div className={styles.wrapper} ref={ref}>
        {Icon ? Icon : null}
        <p>{title}</p>
      </div>
    </Comp>
  );
}

export default forwardRef(CategoriesItem);
