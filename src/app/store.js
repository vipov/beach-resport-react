import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../features/roomsSlice';

export default configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
