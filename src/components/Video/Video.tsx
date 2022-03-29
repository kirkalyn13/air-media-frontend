import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector, RootStateOrAny } from 'react-redux'
import { SERVER } from '../../App'
import './Video.css'

const Video: React.FC= () => {
    const watchInfo = useSelector((state: RootStateOrAny) => state.watch.data)
    
  return (
    <div className="container-video">
      <div className="video-wrapper">
        <ReactPlayer 
        light controls 
        className='react-player'
        width="inherit"
        height="inherit"
        url={`${SERVER}/videos/watch/${watchInfo.videoID}`} />
      </div>
      <div className="movie-details">
        <h2>{watchInfo.title}</h2>
        <p>{watchInfo.genre}</p>
      </div>
    </div>
  )
}

export default Video