import styles from './Review.module.scss';
import clsx from 'clsx';
import Star from '../Star';

const user = [1, 2, 3, 4, 5, 6];
function Review() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div>
          <h2>Review From Clients</h2>
        </div>
        <div>
          <p>
            &quot;See what our valued customers have to say about their
            ElectronicZ experience! From tech enthusiasts to professionals and
            digital nomads&quot;
          </p>
        </div>
      </div>
      <div className={styles.peopleWrapper}>
        {user.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(styles.imgWrapper, {
                [styles.imgWrapperBorder]: index === 0,
                [styles.imgTrans]: index % 2 != 0,
              })}
            >
              <img
                src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/661a6bacbd5832badfa2aec7_portrait-bearded-young-p-500.webp"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className={styles.reviewWrapper}>
        <div className={styles.review}>
          <img
            className={styles.comma}
            src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/661a66936f7deb19462ab1df_text.webp"
            alt=""
          />
          <div className={styles.name}>David Smith</div>
          <div className={styles.it}>IT Professional</div>
          <div className={styles.des}>
            <p>
              &quot;ElectronicZ has become my one-stop shop for all my tech
              needs. Whether it's upgrading my office setup with their monitors
              and keyboards or finding the perfect gift for a fellow tech
              enthusiast, ElectronicZ never disappoints. Their website is
              user-friendly, their shipping is fast, and their products are
              always top-notch.&quot;
            </p>
          </div>

          <div>
            <Star
              style={{
                fontSize: '30px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
