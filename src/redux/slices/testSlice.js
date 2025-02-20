import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: { availableTests: [], upcomingTests: [], previousTests: [] },
  reducers: {
    setAvailableTests: (state, action) => {
      state.availableTests = action.payload;
    },
    setUpcomingTests: (state, action) => {
      state.upcomingTests = action.payload;
    },
    setPreviousTests: (state, action) => {
      state.previousTests = action.payload;
    },
  },
});

export const { setAvailableTests, setUpcomingTests, setPreviousTests } = testSlice.actions;
export default testSlice.reducer;