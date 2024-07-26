import styles from './CategoriesItem.module.scss';

import { Link } from 'react-router-dom';

import { forwardRef } from 'react';
import 'tippy.js/dist/tippy.css'; // optional

import { useDispatch } from 'react-redux';
import { setValue } from '`/searchReducer/searchSlice';
import { values } from 'lodash';

function CategoriesItem({ Icon, title, patchName }, ref) {
  const dispatch = useDispatch();

  const props = {};
  let Comp = 'div';
  if (patchName) {
    Comp = Link;
    props.to = `/category/shop`;
    props.onClick = () => {
      dispatch(
        setValue({
          value: patchName,
          findBy: 'category',
        }),
      );
      console.log('thực hiện dispatch');
    };
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
