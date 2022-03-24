import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector, RootStateOrAny } from 'react-redux'
import { SERVER } from '../../App'
import './Video.css'

const Video: React.FC= () => {
    const watchInfo = useSelector((state: RootStateOrAny) => state.watch.data)
    
  return (
    <div className="container-video">
      <h1>{watchInfo.title}</h1>
      <h4>{watchInfo.genre}</h4>
      <ReactPlayer light controls 
      width="854px" height="480px"
      url={`${SERVER}/videos/watch/${watchInfo.videoID}`} />
    </div>
  )
}

export default Video