import styles from './ListContainer.module.scss';

import ItemProduct from '../ItemProduct';

import { ListProducts } from '`/ListProducts';

function ListContainer() {
  return (
    <div className={styles.container}>
      {ListProducts.map((item, index) => {
        return <ItemProduct key={index} title={item.name} icon={item.icon} />;
      })}
    </div>
  );
}

export default ListContainer;
