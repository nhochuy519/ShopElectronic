import styles from './Button.module.scss';

function Button({ textColor, hoverTextColor, background, borderColor, title }) {
  // const className = clsx(styles.wrapper, {
  //   [styles.primary]: primary,
  // });
  const Comp = 'a';
  return (
    <div
      className={styles.wrapper}
      style={{
        border: borderColor,
      }}
    >
      <Comp>
        <div className={styles.textWrapper}>
          <p
            style={{
              color: hoverTextColor,
            }}
          >
            {title}
          </p>
          <p
            style={{
              color: textColor,
            }}
          >
            {title}
          </p>
        </div>
        <div
          className={styles.bgColor}
          style={{
            backgroundColor: background,
          }}
        ></div>
      </Comp>
    </div>
  );
}

export default Button;
