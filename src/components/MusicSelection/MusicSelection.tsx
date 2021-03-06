import React from 'react'
import './MusicSelection.css'
import { useSelector, RootStateOrAny} from 'react-redux'
import MusicDetails from '../MusicDetails/MusicDetails'
import Searchbar from '../Searchbar/Searchbar'

const MusicSelection: React.FC = () => {
  const musicInfo = useSelector((state: RootStateOrAny) => state.music.data)

  return (
    <div className="container-music-selection">
      <Searchbar searchTitle='Song' load="song"/>
        <ul className='song-list'>
            {musicInfo.map((song: any) => <MusicDetails key={song.musicID} musicID={song.musicID} artist={song.artist} title={song.title} genre={song.genre}/>)}
        </ul>
    </div>
  )
}

export default MusicSelection