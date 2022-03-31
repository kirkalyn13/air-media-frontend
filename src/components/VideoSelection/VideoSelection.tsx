import React from 'react'
import './VideoSelection.css'
import { useSelector, RootStateOrAny} from 'react-redux'
import VideoDetails from '../VideoDetails/VideoDetails'
import Searchbar from '../Searchbar/Searchbar'

const VideoSelection: React.FC = () => {
  const videoInfo = useSelector((state: RootStateOrAny) => state.video.data)

  return (
    <div className="container-video-selection">
        <Searchbar searchTitle='Video' load="video"/>
        <ul className='video-list'>
            {videoInfo.map((vid: any) => <VideoDetails key={vid.videoID} videoID={vid.videoID} title={vid.title} genre={vid.genre}/>)}
        </ul>
    </div>
  )
}

export default VideoSelection