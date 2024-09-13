import styles from './Profile.module.scss';

import { LuPencilLine } from 'react-icons/lu';

import { useEffect, useState } from 'react';

import instance from '`/apiConfig';

import { useRef } from 'react';

import imageCompression from 'browser-image-compression';

import Pica from 'pica';

const genders = ['Male', 'Female', 'other'];
function Profile() {
  const inputFile = useRef(null);

  const avatar = useRef(null);

  const [photo, setPhoto] = useState(
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fuser-profile&psig=AOvVaw39JycUYdvbYfM0mobUaQhB&ust=1723563923827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCS0oHm74cDFQAAAAAdAAAAABAJ',
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // ngày tháng năm sinh
  const [day, setDay] = useState('0');
  const [month, setMonth] = useState('0');
  const [year, setYear] = useState('0');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i,
  );

  console.log('photo url ');
  const handleChangeProfile = () => {
    const dataPost = { dateOfBirth: `${year}-${month}-${day}` };
    const obj = {
      name,
      email,
      address,
      gender,
      phoneNumber,
      photo,
    };

    Object.keys(obj).forEach((item) => {
      if (obj[item]) {
        dataPost[item] = obj[item];
      }
    });
    console.log(dataPost);
    instance
      .post('/customer/updateProfile', dataPost)
      .then((result) => {
        console.log('update thanh cong', result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    instance
      .get('/customer/getUserProfile')
      .then((result) => {
        const data = result.data.data;
        console.log(new Date(data.dateOfBirth).getDate());
        setPhoto(
          data.photo ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s',
        );
        setName(data.username || '');
        setEmail(data.email);
        setAddress(data.address || '');
        setGender(data.gender || false);
        setPhoneNumber(data.numberPhone || '');
        setDay(data.dateOfBirth ? new Date(data.dateOfBirth).getDate() : '0');
        setMonth(
          data.dateOfBirth ? new Date(data.dateOfBirth).getMonth() + 1 : '0',
        );
        setYear(
          data.dateOfBirth ? new Date(data.dateOfBirth).getFullYear() : '0',
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.userContent}>
        <h1>My profile</h1>
        <div className={styles.labelInput}>
          <p>Name</p>
          <input
            type="text"
            value={name}
            onInput={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className={styles.labelInput}>
          <p>Email</p>
          <input type="text" value={email} />
        </div>
        <div className={styles.labelInput}>
          <p>address</p>
          <input
            type="text"
            value={address}
            onInput={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className={styles.genderWrapper}>
          <p>Gender</p>
          <div>
            {genders.map((item, key) => {
              return (
                <div className={styles.check} key={key}>
                  <label htmlFor="">{item}</label>
                  <input
                    type="checkbox"
                    checked={gender === item.toLocaleLowerCase() ? true : false}
                    onChange={() => {
                      console.log(item);
                      setGender(item.toLocaleLowerCase());
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.phoneUser}>
          <p>PhoneNumber</p>
          <div>
            <p className={styles.number}>{phoneNumber}</p>
            <p>Add number phone</p>
          </div>
        </div>
        <div className={styles.dateOfBirth}>
          <p>Date of birth</p>
          <div>
            <select
              value={day}
              onChange={(e) => {
                setDay(e.target.value);
              }}
            >
              {days.map((item, key) => {
                return (
                  <option value={item} key={key}>
                    {item}
                  </option>
                );
              })}
            </select>
            <select
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            >
              {months.map((item, key) => {
                return (
                  <option value={item} key={key}>
                    {item}
                  </option>
                );
              })}
            </select>
            <select
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              {years.map((item, key) => {
                return (
                  <option value={item} key={key}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.bttSave}>
            <button onClick={handleChangeProfile}>Save</button>
          </div>
        </div>
      </div>
      <div className={styles.imgAvatar}>
        <img
          ref={avatar}
          src={
            photo ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s'
          }
          // src="blob:http://localhost:5173/693e2e25-5905-4232-92bb-91eda591dd0f"
          alt=""
        />
        <LuPencilLine
          onClick={() => {
            inputFile.current.click();
          }}
        />
        <input
          style={{ display: 'none' }}
          ref={inputFile}
          type="file"
          accept=" image/jpeg"
          onChange={async (e) => {
            const file = e.target.files[0];

            const options = {
              maxSizeMB: 0.001, // Giới hạn kích thước tối đa ảnh là 10KB
              maxWidthOrHeight: 500, // Đặt chiều rộng hoặc chiều cao tối đa là 800px
              useWebWorker: true,
              quality: 1,
            };
            const compressedFile = await imageCompression(file, options);

            if (compressedFile) {
              const reader = new FileReader();
              reader.onloadend = () => {
                const result = reader.result;
                console.log(result);
                setPhoto(result);
              };
              reader.readAsDataURL(compressedFile);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
