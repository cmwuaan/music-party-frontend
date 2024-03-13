import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/playerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
