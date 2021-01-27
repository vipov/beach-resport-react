import { createSlice } from '@reduxjs/toolkit';
import items from '../data'
export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  },
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSortedRooms: (state, action) => {
      state.sortedRooms = action.payload;
    },
    setFeaturedRooms: (state, action) => {
      state.featuredRooms = action.payload;
    }
   
  }
});

export const {setRooms, setLoading, setSortedRooms, setFeaturedRooms} = roomsSlice.actions;
export const selectRooms = state => state.rooms.rooms
export const selectSortedRooms = state => state.rooms.sortedRooms;
export const selectFeaturedRooms = state => state.rooms.featuredRooms;
export const selectLoading = state => state.rooms.loading;

export default roomsSlice.reducer;
