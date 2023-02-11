import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: {
    firstName: '',
    lastName: '',
  },
  reducers: {
    /* the states are equal to the values transmitted during the dispatch */
    setName: (state, { payload }) => {      
      state.firstName = payload[0];
      state.lastName = payload[1];
    },
    editName: (state, { payload }) => {
      /* If one of the states is different from the payload, return payload */
      if (state.firstName !== payload[0] && state.lastName !== payload[1]) {
        return {
          firstName: payload[0],
          lastName: payload[1],
        };
      } else {
        /* Otherwise return the current state */
        return {
          firstName: state.firstName,
          lastName: state.lastName,
        };
      }
    },
  },
});

export const { setName, editName } = nameSlice.actions;

export default nameSlice.reducer;
