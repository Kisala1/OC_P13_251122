import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: {
    firstName: '',
    lastName: '',
  },
  reducers: {
    displayName: (state, { payload }) => {
      state.firstName = payload[0];
      state.lastName = payload[1];
    },
  },
});

export const { displayName } = nameSlice.actions;

export default nameSlice.reducer;
