import { createSlice } from '@reduxjs/toolkit';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: { rankings: [] },
  reducers: {
    setRankings: (state, action) => {
      state.rankings = action.payload;
    },
  },
});

export const { setRankings } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;