import React from 'react'
import Welcome from '../../components/Welcome/Welcome'

const watchHeadline = "Watch your Favorite Movie."
const watchContent = "Revisit your favorite stories while you travel."
const watchLink = "/video"
const watchLinkTo = "WATCH"
const watchPhoto = "watch_movie.jpg"
const listenHeadline = "Chill with Some Music."
const listenContent = "Sit back, and relax to your favorite tunes."
const listenLink = "/music"
const listenLinkTo = "LISTEN"
const listenPhoto = "listen_music.jpeg"


const Home: React.FC = () => {
  return (
    <div className="container-home">
      <Welcome headline={watchHeadline} content={watchContent} link={watchLink} linkTo={watchLinkTo} photo={watchPhoto}/>
      <Welcome headline={listenHeadline} content={listenContent} link={listenLink} linkTo={listenLinkTo} photo={listenPhoto}/>
    </div>
  )
}

export default Home