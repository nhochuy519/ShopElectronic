import styles from './BBlock.module.scss';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
function BBlock({ pages = [] }) {
  const breadCrumb = clsx(styles.breadCrumb, {});
  console.log(pages);
  return (
    <div className={styles.wrapper}>
      <Link className={styles.breadcrumb} to={'/'}>
        Home
      </Link>
      {pages.map((item, index) => {
        return (
          <>
            <div className={styles.breadcrumbLine}></div>
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
