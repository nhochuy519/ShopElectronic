import Home from '`/pages/Home';
import About from '`/pages/About';
import Shop from '`/pages/Shop';
import Contact from '`/pages/Contact';
import Blog from '`/pages/Blog';
import SignUp from '`/pages/SignUp';
import Sale from '`/pages/Sale';
import Login from '`/pages/Login';
import Categories from '`/pages/Category';
import FAQ from '`/pages/FAQ';
import PrivacyPolicy from '`/pages/PrivacyPolicy';
import Product from '`/pages/Product';

import MyAccount from '`/pages/MyAccount';

// public routes
const publicRouter = [
  {
    patch: '/',
    component: Home,
  },
  {
    patch: '/home',
    component: Home,
  },
  {
    patch: '/about',
    component: About,
  },
  {
    patch: '/shop/*',
    component: Shop,
  },

  {
    patch: '/contact',
    component: Contact,
  },
  {
    patch: '/blog',
    component: Blog,
  },
  {
    patch: '/product/:id',
    component: Product,
  },
  {
    patch: '/product',
    component: Product,
  },
  {
    patch: '/sign-up',
    component: SignUp,
    layout: null,
  },
  {
    patch: '/login',
    component: Login,
    layout: null,
  },
  {
    patch: '/on-sale',
    component: Sale,
  },
  {
    patch: '/category/:sub',
    component: Shop,
  },
  {
    patch: '/faq',
    component: FAQ,
  },
  {
    patch: '/privacy-policy',
    component: PrivacyPolicy,
  },
  {
    patch: '/my-account',
    component: MyAccount,
  },
];

//private routes
const privateRoutes = [];

export { publicRouter, privateRoutes };
