import React, {useEffect} from 'react'
import './MusicPlayer.css'
import {useDispatch} from 'react-redux'
import { fetchMusic } from '../../features/slices/music'
import MusicSelection from '../../components/MusicSelection/MusicSelection'

const MusicPlayer: React.FC = () => {
  const dispatch: any = useDispatch()

  useEffect(()=>{
    dispatch(fetchMusic())
  },[])
  
  return (
    <div className="container-music-player">
      <MusicSelection />
    </div>
  )
}

export default MusicPlayer