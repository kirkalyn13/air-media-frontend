import {createSlice} from '@reduxjs/toolkit'

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
    name: "watch",
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