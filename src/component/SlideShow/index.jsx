import styles from './SlideShow.module.scss';

import { useRef, useEffect, useState } from 'react';
import Button from '../Button';

const productsSell = [
  {
    type: 'joystick',
    urlImg:
      'https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/661929ad5ba11384a4deb68a_wepik-export-2024040817423606Qx-p-1080.webp',
  },
  {
    type: 'White Headphone',
    urlImg:
      'https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi-p-500.webp',
  },
  {
    type: 'Iphone',
    urlImg:
      'https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/661ea68abba9f469698e0800_wepik-export-20240416160349yBhu%20(1)-p-1080.webp',
  },
];

function SlideShow() {
  const label = useRef([]);
  const pushLabel = (el) => label.current.push(el);

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   label.current.forEach((item) => {
  //     item.addEventListener();
  //   });
  // }, []);

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        {productsSell.map((item, index) => {
          return (
            <div
              key={index}
              style={
                count === index ? { display: 'block' } : { display: 'none' }
              }
            >
              <div className={styles.container}>
                <div className={styles.info}>
                  <h1>ElectronicZ: Innovation Meets Excellence!</h1>
                  <h2>{item.type}</h2>
                  <div className={styles.buttonContainer}>
                    <Button
                      title={'View Product'}
                      background={`var(--1-main-colors--border)`}
                      borderColor={'2px solid var(--1-main-colors--border)'}
                      textColor={'white'}
                    />
                    <Button
                      title={'Shop Product Now'}
                      background={`var(--main-color-primary)`}
                      borderColor={'2px solid var(--main-color-primary)'}
                      textColor={'white'}
                      hoverTextColor={'white'}
                    />
                  </div>
                </div>
                <div className={styles.containerImg}>
                  <img src={item.urlImg} alt="" />
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.buttonSlider}>
          <div className={styles.buttonWrapper}>
            {productsSell.map((item, index) => {
              return (
                <div
                  style={
                    count === index
                      ? {
                          width: '50px',
                          backgroundColor: 'var(--main-color-primary)',
                        }
                      : {
                          width: '16px',
                          height: '16px',
                          backgroundColor: 'white',
                        }
                  }
                  ref={pushLabel}
                  className={styles.slideDot}
                  key={index}
                  onClick={() => {
                    setCount(index);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
