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
    component: Categories,
  },
  {
    patch: '/faq',
    component: FAQ,
  },
  {
    patch: '/privacy-policy',
    component: PrivacyPolicy,
  },
];

//private routes
const privateRoutes = [];

export { publicRouter, privateRoutes };
