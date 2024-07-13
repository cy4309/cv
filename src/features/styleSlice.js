import { createSlice } from '@reduxjs/toolkit';

// styleSlice.js 定義了一個名為 style 的 slice，它有一個 darkMode 的狀態，
// 以及一個 toggleDarkMode 的 reducer 用來切換 darkMode 的值。

export const styleSlice = createSlice({
  name: 'style',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = styleSlice.actions;

export default styleSlice.reducer;
