import React, { useEffect } from 'react'
import './VideoPlayer.css'
import Video from '../../components/Video/Video'
import VideoSelection from '../../components/VideoSelection/VideoSelection'
import { useDispatch } from 'react-redux'
import { fetchVideo } from '../../features/slices/video'

const VideoPlayer: React.FC = () => {
  const dispatch: any = useDispatch()

  useEffect(()=>{
    dispatch(fetchVideo())
  },[])

  return (
    <div className="container-video-player">
        <Video/>
        <VideoSelection />
    </div>
  )
}

export default VideoPlayer