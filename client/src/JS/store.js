import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice/userSlice';
import offreReducer from './offreSlice';

export const store = configureStore({
  reducer: {
    user:userSlice,
    offre:offreReducer,
  },
})