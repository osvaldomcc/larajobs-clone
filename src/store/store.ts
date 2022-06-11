import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

//Declare and export types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
