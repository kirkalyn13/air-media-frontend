import React from 'react'
import './Searchbar.css'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { IconButton } from '@mui/material'
import {filterVideos} from '../../features/slices/video'
import {filterMusic} from '../../features/slices/music'
import SearchIcon from '@mui/icons-material/Search'

interface Props {
    searchTitle: string,
    load: string,
}

const buttonStyles = {
    height: "inherit",
    width: "inherit",
    marginRight: "0.5rem",
    color: "#FFF"
}

const Searchbar: React.FC<Props> = ({searchTitle, load}) => {
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const search = (input: any):void => {
        if(load === "video")
        {dispatch(filterVideos(input))}
        if(load === "song")
        {dispatch(filterMusic(input))}
    }

  return (
    <div>
        <form className="search-form" autoComplete="off" onSubmit={handleSubmit(data => search(data))}>
            <label className="label-search">Search {searchTitle}:  </label>
                    <input className="input-search" type="text"    
                    {...register("search")}
                    placeholder="Enter Title"/>
            <IconButton style={buttonStyles} 
                type="submit">    
                    <SearchIcon/>
            </IconButton>
        </form>
    </div>
  )
}

export default Searchbar