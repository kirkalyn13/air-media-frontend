import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { SERVER } from '../../App'
import axios from 'axios'

interface Video {
  musicID: number | null,
  title: string,
  artist: string,
  genre: string,
}

const initialFieldValues: Video[] = [
  {
  musicID: null,
  title: "",
  artist: "",
  genre: "",
  }
]


export const fetchMusic = createAsyncThunk("fetchMusic", async () =>
  axios
    .get(`${SERVER}/music/`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
)

export const musicSlice = createSlice({
    name: "video",
    initialState: {
        data: initialFieldValues,
    },
    reducers:{
      filterMusic: (state, action) => {
        state.data = state.data.filter((entry:any) => entry.title.toLowerCase().includes(action.payload.search.toLowerCase()))     
    },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMusic.pending, (state) => {
          state.data = initialFieldValues
          })
        builder.addCase(fetchMusic.fulfilled, (state, action) => {
          state.data = action.payload
        })
      }
})

export const {filterMusic} = musicSlice.actions
export default musicSlice.reducer