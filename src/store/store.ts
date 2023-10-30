import { configureStore } from "@reduxjs/toolkit";
import { channelsApi } from "./apis/getChannelsAPI";
import { channelsSlice } from './Channels/ChannelsSlice';

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