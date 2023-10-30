import { configureStore } from "@reduxjs/toolkit";
import { channelsSlice } from './Channels/ChannelsSlice';
import { channelsApi } from './apis/getChannelsApi';

export const store = configureStore({
  reducer: {
    channel: channelsSlice.reducer,
    [channelsApi.reducerPath]: channelsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(channelsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch