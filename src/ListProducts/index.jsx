import { IoWatchOutline } from 'react-icons/io5';
import { MdOutlineSpeaker } from 'react-icons/md';
import { IoIosPhonePortrait, IoIosLaptop } from 'react-icons/io';
import { BsMouse } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { FaRegKeyboard } from 'react-icons/fa';
import { BiJoystick } from 'react-icons/bi';
import { CiHeadphones } from 'react-icons/ci';
import { BsEarbuds } from 'react-icons/bs';
import { CiCamera } from 'react-icons/ci';
import { TbDeviceCctv } from 'react-icons/tb';

const ListProducts = [
  {
    icon: <IoWatchOutline />,
    name: 'Watch',
  },
  {
    icon: <MdOutlineSpeaker />,
    name: 'Speaker',
  },
  {
    icon: <IoIosPhonePortrait />,
    name: 'Phone',
  },
  {
    icon: <BsMouse />,
    name: 'Mouse',
  },
  {
    icon: <FiMonitor />,
    name: 'Monitor',
  },
  {
    icon: <IoIosLaptop />,
    name: 'Laptop',
  },
  {
    icon: <FaRegKeyboard />,
    name: 'Keyboard',
  },
  {
    icon: <BiJoystick />,
    name: 'Joystick',
  },
  {
    icon: <CiHeadphones />,
    name: 'Headphone',
  },
  {
    icon: <BsEarbuds />,
    name: 'Earbuds',
  },
  {
    icon: <CiCamera />,
    name: 'Camera',
  },
  {
    icon: <TbDeviceCctv />,
    name: 'CCTV',
  },
];

const listForTab = [
  {
    icon: <CiHeadphones />,
    name: 'Headphone',
  },
  {
    icon: <TbDeviceCctv />,
    name: 'CCTV',
  },
  {
    icon: <BsMouse />,
    name: 'Mouse',
  },
  {
    icon: <FiMonitor />,
    name: 'Monitor',
  },
  {
    icon: <FaRegKeyboard />,
    name: 'Keyboard',
  },
  {
    icon: <MdOutlineSpeaker />,
    name: 'Speaker',
  },
  {
    icon: <IoIosPhonePortrait />,
    name: 'Phone',
  },
  {
    icon: <IoIosLaptop />,
    name: 'Laptop',
  },
];

const brands = [
  {
    name: 'Asus',
  },
  {
    name: 'Msi',
  },
  {
    name: 'HyperX',
  },
  {
    name: 'Lenovo',
  },
  {
    name: 'Apple',
  },
];

export { ListProducts, listForTab, brands };
