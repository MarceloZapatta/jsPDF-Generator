import { configureStore } from '@reduxjs/toolkit';
import pdfReducer from '../features/pdf/pdfSlice.ts';

const store = configureStore({
  reducer: {
    pdf: pdfReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
