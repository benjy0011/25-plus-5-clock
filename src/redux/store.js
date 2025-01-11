import { configureStore } from "@reduxjs/toolkit";
import clockReducer from './slices/clockSlice';

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
});

export default store;