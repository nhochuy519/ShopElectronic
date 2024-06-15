import styles from './NavList.module.scss';
import { clsx } from 'clsx';
import { MdKeyboardArrowUp } from 'react-icons/md';

import { forwardRef } from 'react';

// eslint-disable-next-line react/prop-types
function NavList({ title, active = false, arrow = false, borderBottom }, ref) {
  const classNames = clsx(styles.wrapper, {
    [styles.active]: active,
  });
  return (
    <div className={classNames} ref={ref}>
      <div>
        <p>{title}</p>
        {arrow ? (
          <MdKeyboardArrowUp fontSize={17} className={styles.arrowIcon} />
        ) : null}
      </div>
      {borderBottom ? <div className={styles.navBorder}></div> : null}
    </div>
  );
}

export default forwardRef(NavList);
