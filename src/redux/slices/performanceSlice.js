import { createSlice } from '@reduxjs/toolkit';

const performanceSlice = createSlice({
  name: 'performance',
  initialState: { stats: {} },
  reducers: {
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { setStats } = performanceSlice.actions;
export default performanceSlice.reducer;