import { createSlice } from '@reduxjs/toolkit'

export interface channelStateInterface {
  currentNote :{
    id: number | null
    description: string
    title: string
    since: string
    till: string
    channelUuid: string,
    duration: string,
    channelImage?: string
  }
}

const initialState: channelStateInterface = {
  currentNote : {
    id: null,
    description: 'Pasa el mouse por el canal que quieras obtener informacion',
    title: 'Bienvenido a nuestra Guía electrónica de programas ',
    since: '',
    till: '',
    channelUuid: '',
    duration: '',
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
      state.currentNote.channelUuid = payload.channelUuid;
      state.currentNote.duration = payload.duration
    },
    setCurrentChannelImage: (state, {payload}) => {
      state.currentNote.channelImage = payload
    },
    removeCurrentShow: (state) => {
      state.currentNote.id = null;
      state.currentNote.description = 'Pasa el mouse por el canal que quieras obtener informacion';
      state.currentNote.title = 'Bienvenido a nuestra Guía electrónica de programas';
      state.currentNote.since = '';
      state.currentNote.till = '';
      state.currentNote.channelUuid = '';
      state.currentNote.duration = '';
      state.currentNote.channelImage = '';
    }
  },
})

export const { setCurrentShow, removeCurrentShow, setCurrentChannelImage } = channelsSlice.actions;