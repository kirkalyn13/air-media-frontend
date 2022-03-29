import { createSlice } from '@reduxjs/toolkit'

interface Song {
  musicID: number | null,
  title: string,
  artist: string,
  genre: string
}

const initialFieldValues: Song[] = [
  {
  musicID: 0,
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