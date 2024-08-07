import styles from '../Login/Login.module.scss';

import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import instance from '`/apiConfig';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [error, setError] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    instance
      .post(
        '/customer/signup',
        {
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
        console.log('thành công');
        alert('Sign up successful');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.error.code === 11000) {
          setError('Email already exists');
          setEmail('');
        }
        if (err.response.data.error.name === 'ValidationError') {
          setErrorPassword('Invalid password');
          setPassword('');
          setPasswordConfirm('');
        }
      });
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign up</h2>
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className={styles.input}>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            onFocus={() => setErrorPassword('')}
          />
          {errorPassword && <p style={{ color: 'red' }}>{errorPassword}</p>}
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
