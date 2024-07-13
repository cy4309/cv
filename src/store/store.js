import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/features/counterSlice';
import styleReducer from '@/features/styleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    style: styleReducer,
  },
});
