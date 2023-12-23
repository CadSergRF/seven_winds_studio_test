import { stringsApi } from './../services/stringsApi';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [stringsApi.reducerPath]: stringsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringsApi.middleware),
});

setupListeners(store.dispatch);
