import styles from './BBlock.module.scss';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
function BBlock({ pages = [] }) {
  // eslint-disable-next-line no-unused-vars
  const breadCrumb = clsx(styles.breadCrumb, {});

  return (
    <div className={styles.wrapper}>
      <Link className={styles.breadcrumb} to={'/'}>
        Home
      </Link>
      {pages.map((item, index) => {
        return (
          <>
            <div className={styles.breadcrumbLine} key={index}></div>
            <Link
              className={clsx(styles.breadcrumb, {
                [styles.breadcrumbActive]: index === pages.length - 1,
              })}
              to={item.path}
            >
              {item.name}
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default BBlock;
