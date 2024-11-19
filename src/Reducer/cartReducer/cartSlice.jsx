import instance from '`/apiConfig';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  await instance.post(
    '/customer/addToCart',
    {
      idProduct: product.idProduct,
      idVariantProduct: product.idVariant,
      quantity: product.quantity,
      price: product.price,
    },
    {
      withCredentials: true,
    },
  );
});

const fetchCartItems = createAsyncThunk('cart/getCart', async () => {
  const response = await instance.get('/customer/userCart', {
    withCredentials: true,
  });

  // Chỉ trả về phần data cần thiết, không trả về toàn bộ response
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart', // trỏ đến 'cart/getCart'
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'success';
        console.log(action.payload);
      })
      .addCase(addToCart.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload; // payload là giá trị được trả về từ hàm fetchCartItems
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default cartSlice.reducer;

export { addToCart, fetchCartItems };
