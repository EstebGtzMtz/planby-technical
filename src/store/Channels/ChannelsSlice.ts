import { createSlice } from '@reduxjs/toolkit'

interface channelStateInterface {
  id: number | null
  description: string
  title: string
  since: string
  till: string
  channelUuid: number | null
}

const initialState: channelStateInterface = {
  id: null,
  description: '',
  title: '',
  since: '',
  till: '',
  channelUuid: null
}

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentShow: (state, {payload}) => {
      state.id = payload.id;
      state.description = payload.description;
      state.title = payload.title;
      state.since = payload.since;
      state.till = payload.till;
      state.channelUuid = payload.channelUuid
    },
    removeCurrentShow: (state) => {
      state.id = null;
      state.description = '';
      state.title = '';
      state.since = '';
      state.till = '';
      state.channelUuid = null;
    }
  },
})

export const { setCurrentShow, removeCurrentShow } = channelsSlice.actions;