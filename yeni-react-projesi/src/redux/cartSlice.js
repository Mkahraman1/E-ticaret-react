import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state) => {
      state.count += 1
    },
    removeProduct: (state) => {
      if (state.count > 0) {
        state.count -= 1
      }
    },
    resetCart: (state) => {
      state.count = 0
    },
  },
})

export const { addProduct, removeProduct, resetCart } = cartSlice.actions
export default cartSlice.reducer
