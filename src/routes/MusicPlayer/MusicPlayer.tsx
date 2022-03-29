import React, {useEffect} from 'react'
import './MusicPlayer.css'
import {useDispatch} from 'react-redux'
import { fetchMusic } from '../../features/slices/music'
import MusicSelection from '../../components/MusicSelection/MusicSelection'
import SongPlayer from '../../components/SongPlayer/SongPlayer'

const MusicPlayer: React.FC = () => {
  const dispatch: any = useDispatch()

  useEffect(()=>{
    dispatch(fetchMusic())
  },[])

  return (
    <div className="container-music-player">
      <SongPlayer />
      <MusicSelection />
    </div>
  )
}

export default MusicPlayer