import styles from './Footer.module.scss';

import { MdOutlinePhone } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerWrapper}>
        <div>
          <img
            className={styles.icon}
            src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/6613a025a95f59c73e5d74d6_ELECTRONICZ.webp"
            alt=""
          />
          <p>
            At ElectronicZ, we're dedicated to providing you with the best in
            electronic innovation. Explore our wide range of products, from
            headphones to smart home devices.
          </p>
          <div className={styles.contact}>
            <div className={styles.number}>
              <MdOutlinePhone />
              <div>(800) 555‑0199</div>
            </div>
            <div className={styles.email}>
              <CiMail />
              <div>NX@Electronicz.com</div>
            </div>
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <div className={styles.links}>
            <div>Useful Links</div>
            <div>
              <div>Home</div>
              <div>About</div>
              <div>Blog</div>
              <div>Shop</div>
              <div>Contact</div>
            </div>
          </div>
          <div className={styles.links}>
            <div>Quick Links</div>
            <div>
              <div>About Us</div>
              <div>FAQ</div>
              <div>Shop</div>
              <div>Log-In</div>
              <div>Licensing</div>
            </div>
          </div>
        </div>

        <div className={styles.socialNetwork}>
          <div>NewsLetter</div>
          <div>
            <input type="text" placeholder="Enter your email" />
            <div>Subscribe</div>
          </div>

          <div className={styles.socialWrapper}>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              {' '}
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRightPrivacy}>
        <div className={styles.copyRight}>
          <div>Copyright © ElectronicZ-NX | Designed by Nexoy |</div>
          <div>Powered by Webflow.com</div>
        </div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
}

export default Footer;
