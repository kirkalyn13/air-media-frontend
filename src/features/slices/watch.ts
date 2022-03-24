import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { SERVER } from '../../App'
import axios from 'axios'

interface Video {
  videoID: number | null,
  title: string,
  genre: string
}

const initialFieldValues: Video[] = [
  {
  videoID: null,
  title: "",
  genre: "",
  }
]

export const watchSlice = createSlice({
    name: "video",
    initialState: {
        data: initialFieldValues,
    },
    reducers:{
        play: (state, action) => {
            state.data = action.payload
        },
    },
})


export const {play} = watchSlice.actions
export default watchSlice.reducer