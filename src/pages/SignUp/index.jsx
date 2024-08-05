import styles from '../Login/Login.module.scss';

import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import instance from '`/apiConfig';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(passwordConfirm);

    instance
      .post(
        '/customer/signup',
        {
          username: username,
          password: password,
          passwordConfirm: passwordConfirm,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
        console.log('thành công');
      })
      .catch((err) => {
        console.log(err);
        console.log('thất bại');
      });
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign up</h2>
        <div className={styles.input}>
          <p>Username</p>
          <input
            type="text"
            placeholder="username"
            required
            value={username}
            onInput={(e) => setUsername(e.target.value)}
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
          />
        </div>
        <div className={styles.input}>
          <p>Password confirm</p>
          <input
            type="password"
            placeholder="password"
            required
            value={passwordConfirm}
            onInput={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.bttSubmit}>
          Sign Up
        </button>

        <div className={styles.formFooter}>
          <p>Forgot your Password?</p>
          <p>
            Already have an account?{' '}
            <Link to={'/login'} className={styles.link}>
              Login
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

export default SignUp;
