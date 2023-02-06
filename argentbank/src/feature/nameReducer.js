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
    editName: (state, { payload }) => {
      if (state.firstName !== payload[0]) {
        if (state.lastName !== payload[1]) {
          return {
            firstName: payload[0],
            lastName: payload[1],
          };
        }
        return { firstName: payload[0], lastName: state.lastName };
      }
      if (state.lastName !== payload[1]) {
        return { firstName: state.firstName, lastName: payload[1] };
      } else {
        return {
          firstName: state.firstName,
          lastName: state.lastName,
        };
      }
    },
  },
});

export const { displayName, editName } = nameSlice.actions;

export default nameSlice.reducer;
