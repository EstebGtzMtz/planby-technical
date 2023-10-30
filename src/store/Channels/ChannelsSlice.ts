import { createSlice } from '@reduxjs/toolkit'

export interface channelStateInterface {
  currentNote :{
    id: number | null
    description: string
    title: string
    since: string
    till: string
    channelUuid: number | null
  }
}

const initialState: channelStateInterface = {
  currentNote : {
    id: null,
    description: '',
    title: '',
    since: '',
    till: '',
    channelUuid: null
  }
}

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentShow: (state, {payload}) => {
      state.currentNote.id = payload.id;
      state.currentNote.description = payload.description;
      state.currentNote.title = payload.title;
      state.currentNote.since = payload.since;
      state.currentNote.till = payload.till;
      state.currentNote.channelUuid = payload.channelUuid
    },
    removeCurrentShow: (state) => {
      state.currentNote.id = null;
      state.currentNote.description = '';
      state.currentNote.title = '';
      state.currentNote.since = '';
      state.currentNote.till = '';
      state.currentNote.channelUuid = null;
    }
  },
})

export const { setCurrentShow, removeCurrentShow } = channelsSlice.actions;