import { createSlice } from '@reduxjs/toolkit'
import { SERVER } from '../../App'
import axios from 'axios'

interface Song {
  musicID: number | null,
  title: string,
  artist: string,
  genre: string
}

const initialFieldValues: Song[] = [
  {
  musicID: null,
  title: "",
  artist: "",
  genre: "",
  }
]

export const listenSlice = createSlice({
    name: "listen",
    initialState: {
        data: initialFieldValues,
    },
    reducers:{
        play: (state, action) => {
            state.data = action.payload
        },
    },
})


export const {play} = listenSlice.actions
export default listenSlice.reducer