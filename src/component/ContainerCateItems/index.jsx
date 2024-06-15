import styles from './ContainerCateItems.module.scss';

import CategoriesItem from '../CategoriesItem';
import { ListProducts } from '`/ListProducts';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { TbCategory2 } from 'react-icons/tb';

function ContainerCategories() {
  return (
    <div>
      <Tippy
        zIndex={99}
        interactive={true}
        placement="bottom"
        offset={[95, 15]}
        inertia={true}
        render={(attrs) => (
          <div className={styles.wrapper} {...attrs}>
            {ListProducts.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <CategoriesItem
                    key={index}
                    title={item.name}
                    Icon={item.icon}
                    patchName={item.name.toLocaleLowerCase()}
                  />
                </div>
              );
            })}
          </div>
        )}
      >
        <CategoriesItem title={'Categories'} Icon={<TbCategory2 />} />
      </Tippy>
    </div>
  );
}

export default ContainerCategories;
