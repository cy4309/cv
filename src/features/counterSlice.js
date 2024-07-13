import { createSlice } from '@reduxjs/toolkit';

// counterSlice.js 定義了一個名為 counter 的 slice，它有一個 value 的狀態，
// 以及三個 reducers (increment, decrement, incrementByAmount) 用來修改 value 的值。

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
