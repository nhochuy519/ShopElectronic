import { Children } from 'react';

const Pages = [
  {
    name: 'Home',
    patch: '/home',
  },
  {
    name: 'About Us',
    patch: '/about',
  },
  {
    name: 'Shop',
    patch: '/shop',
  },
  {
    name: 'Blog',
    patch: '/blog',
  },
  {
    name: 'Contact',
    patch: '/contact',
  },
  {
    name: 'Pages',
    children: [
      {
        name: 'FAQ',
        patch: '/faq',
      },
      {
        name: 'On sale',
        patch: '/on-sale',
      },
      {
        name: 'Privacy Policy',
        patch: '/privacy-policy',
      },
      {
        name: 'Sign Up',
        patch: '/sign-Up',
      },
    ],
  },
];

export default Pages;
