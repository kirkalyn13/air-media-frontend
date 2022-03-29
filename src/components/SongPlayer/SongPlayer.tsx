import React, {useState} from 'react'
import './SongPlayer.css'
import ReactAudioPlayer from 'react-audio-player'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { IconButton } from '@mui/material'
import { useSelector, RootStateOrAny } from 'react-redux'
import { useDispatch } from 'react-redux'
import { play } from '../../features/slices/listen'
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
        if(listenID <= musicInfo.length - 1){
            setListenID(listenID + 1)
            setTimeout(()=>{
                dispatch(play({
                    musicID: musicInfo[listenID].musicID,
                    artist: musicInfo[listenID].artist,
                    title: musicInfo[listenID].title,
                    genre: musicInfo[listenID].genre,
                }))
            },200)
        }
    }

    const previousSong = ():void => {
        if(listenID >= 0){
            setListenID(listenID - 1) 
            console.log("back", listenID)
            setTimeout(()=>{
                dispatch(play({
                    musicID: musicInfo[listenID].musicID,
                    artist: musicInfo[listenID].artist,
                    title: musicInfo[listenID].title,
                    genre: musicInfo[listenID].genre,
                }))
            },200)
            console.log("change song")
        }
    }

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
        />
    </div>
  )
}

export default SongPlayer