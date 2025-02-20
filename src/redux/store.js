// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import testReducer from './slices/testSlice';
import performanceReducer from './slices/performanceSlice';
import leaderboardReducer from './slices/leaderboardSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: testReducer,
    performance: performanceReducer,
    leaderboard: leaderboardReducer,
    user: userReducer,
  },
});
