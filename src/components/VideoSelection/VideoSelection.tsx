import React from 'react'
import { useSelector, RootStateOrAny} from 'react-redux'
import VideoDetails from '../VideoDetails/VideoDetails'
import video from '../../features/slices/video'

const VideoSelection: React.FC = () => {
  const videoInfo = useSelector((state: RootStateOrAny) => state.video.data)

  return (
    <div className="container-video-selection">
        <ul>
            {videoInfo.map((vid: any) => <VideoDetails key={vid.videoID} videoID={vid.videoID} title={vid.title} genre={vid.genre}/>)}
        </ul>
    </div>
  )
}

export default VideoSelection