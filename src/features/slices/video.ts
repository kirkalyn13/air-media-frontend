import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { SERVER } from '../../App'
import axios from 'axios'

interface Video {
  videoID: number | null,
  title: string,
  genre: string,
}

const initialFieldValues: Video[] = [
  {
  videoID: null,
  title: "",
  genre: "",
  }
]


export const fetchVideo = createAsyncThunk("fetchVideo", async () =>
  axios
    .get(`${SERVER}/videos/`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
)

export const videoSlice = createSlice({
    name: "video",
    initialState: {
        data: initialFieldValues,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state) => {
          state.data = initialFieldValues
          })
        builder.addCase(fetchVideo.fulfilled, (state, action) => {
          state.data = action.payload
        })
      }
})

export default videoSlice.reducer