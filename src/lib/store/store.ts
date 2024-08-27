import { configureStore } from '@reduxjs/toolkit';
import { BlogAPI } from '../features/api/BlogApi';

export const store = configureStore({
  reducer: {
    [BlogAPI.reducerPath]: BlogAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BlogAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
