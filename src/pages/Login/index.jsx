import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import { FaArrowRightLong } from 'react-icons/fa6';

import instance from '`/apiConfig';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    instance
      .post(
        '/customer/login',
        {
          email: email,
          password: password,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
        console.log('thành công');
        alert('Login successful');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        console.log('lỗi ròi', err.response.data.message);
        setError(err.response.data.message);
      });
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login</h2>
        <div className={styles.input}>
          <p>email</p>
          <input
            type="text"
            placeholder="email"
            required
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            onFocus={() => setError('')}
          />
        </div>
        <div className={styles.input}>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            onFocus={() => setError('')}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        <button type="submit" className={styles.bttSubmit}>
          Log in
        </button>

        <div className={styles.formFooter}>
          <p>Forgot your Password?</p>
          <p>
            Already have an account?{' '}
            <Link to={'/sign-up'} className={styles.link}>
              Sign up
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
