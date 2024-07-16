import styles from './ProductBar.module.scss';

import Button from '../Button';

import clsx from 'clsx';

import { useEffect, useRef, useState } from 'react';
function ProductBar({ title, firstText, secondText, thirdText }) {
  const [animation, setAnimation] = useState(false);

  const animationText = clsx(styles.animationTilte, {
    [styles.addAnimation]: animation,
  });
  const textAnimation = useRef(null);
  const borderLine = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!animation) {
              setAnimation(true);
              borderLine.current.style.width = '100%';
              // textAnimation.current.style.animation =
              //   'animationText 11s 2s ease infinite forwards';
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      },
    );
    if (textAnimation.current) {
      observer.observe(textAnimation.current);
      observer.observe(borderLine.current);
    }

    return () => {
      if (textAnimation.current) {
        observer.unobserve(textAnimation.current); // nếu phần tử này được unmout thì dừng việc theo dõi
      }
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.productBarText}>
        <div className={styles.title}>
          <h2>{title}</h2>
          <div className={styles.animationTextWrapper}>
            <div className={animationText} ref={textAnimation}>
              <h2 className={styles.firstText}> {firstText}</h2>
              <h2 className={styles.secondText}>{secondText}</h2>
              <h2 className={styles.thirdText}>{thirdText}</h2>
              <h2 className={styles.firstText}> {firstText}</h2>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            title={'Shop Product Now'}
            background={`var(--main-color-primary)`}
            borderColor={'2px solid var(--main-color-primary)'}
            textColor={'var(--main-color-primary)'}
            hoverTextColor={'white'}
          />
        </div>
      </div>
      <div className={styles.borderLine} ref={borderLine}></div>
    </div>
  );
}

export default ProductBar;
