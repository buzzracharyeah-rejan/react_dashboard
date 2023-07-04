import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './slices/global.slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './api/index';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);
