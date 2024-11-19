import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './searchReducer/searchSlice';
import cartReducer from './cartReducer/cartSlice';
const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
