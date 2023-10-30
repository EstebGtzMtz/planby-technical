import { configureStore } from "@reduxjs/toolkit";
import { channelsSlice } from './Channels/ChannelsSlice';

export const store = configureStore({
  reducer: {
    channel: channelsSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch