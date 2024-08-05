import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import { FaArrowRightLong } from 'react-icons/fa6';

function Login() {
  const handleSubmit = () => {};
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login</h2>
        <div className={styles.input}>
          <p>Username</p>
          <input type="text" placeholder="username" required />
        </div>
        <div className={styles.input}>
          <p>Password</p>
          <input type="password" placeholder="password" required />
        </div>
        <button type="submit" className={styles.bttSubmit}>
          Login
        </button>

        <div className={styles.formFooter}>
          <p>Forgot your Password?</p>
          <p>
            Don't have an account?{' '}
            <Link to={'/sign-up'} className={styles.link}>
              Create an account
            </Link>{' '}
          </p>
        </div>

        <Link to={'/'} className={styles.back}>
          <p>Back To Home</p>
          <FaArrowRightLong />
        </Link>
      </form>
    </div>
  );
}

export default Login;
