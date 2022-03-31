import React, { useState, useEffect } from 'react'
import './SongPlayer.css'
import ReactAudioPlayer from 'react-audio-player'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { IconButton } from '@mui/material'
import { useSelector, RootStateOrAny } from 'react-redux'
import { useDispatch } from 'react-redux'
import { play } from '../../features/slices/listen'
import { fetchMusic } from '../../features/slices/music'
import { SERVER } from '../../App'

const MUSIC_LOGO = "./assets/music_logo.png"
const playerStyles = {
    width: "80%",
    margin: "2rem 1rem",
}

const buttonStyles = {
    marginRight: "0.5rem",
    color: "#FFF"
}
const iconStyles = {
    width: "50px",
    height: "50px"
}

const SongPlayer: React.FC = () => {
    const dispatch = useDispatch()
    const listenInfo = useSelector((state: RootStateOrAny) => state.listen.data)
    const musicInfo = useSelector((state: RootStateOrAny) => state.music.data) 
    const [listenID, setListenID] = useState(0)

    const nextSong = ():void => {
        if(listenID < musicInfo.length - 1){
            const nextID: number = listenID + 1
            dispatch(play({
                musicID: musicInfo[nextID].musicID,
                artist: musicInfo[nextID].artist,
                title: musicInfo[nextID].title,
                genre: musicInfo[nextID].genre,
            }))
        }
    }

    const previousSong = ():void => {
        if(listenID >= 1){
            const prevID: number = listenID - 1
            dispatch(play({
                musicID: musicInfo[prevID].musicID,
                artist: musicInfo[prevID].artist,
                title: musicInfo[prevID].title,
                genre: musicInfo[prevID].genre,
            }))
        }
    }

    useEffect(()=>{
        setListenID(listenInfo.musicID - 1) 
    },[listenInfo.musicID])


  return (
    <div className="container-song-player">
        <div className="container-icons">
            <IconButton style={buttonStyles}
            onClick={previousSong}>
                <SkipPreviousIcon style={iconStyles}/>
            </IconButton>
            <img src={MUSIC_LOGO} className="music-image" alt="music_logo" />
            <IconButton style={buttonStyles}
            onClick={nextSong}>
                <SkipNextIcon style={iconStyles}/>
            </IconButton>
        </div>
        <div className="song-details">
            <h2>{listenInfo.title}</h2>
            <p>{listenInfo.artist}</p>
            <p>{listenInfo.genre}</p>
        </div>
        <ReactAudioPlayer
        src={`${SERVER}/music/listen/${listenInfo.musicID}`}
        autoPlay
        controls
        style={playerStyles}
        onPlay={() => dispatch(fetchMusic())}
        />
    </div>
  )
}

export default SongPlayer