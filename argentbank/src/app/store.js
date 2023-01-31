import { configureStore } from '@reduxjs/toolkit';
import nameSlice from '../feature/nameReducer';

export const store = configureStore({ reducer: { user: nameSlice } });
