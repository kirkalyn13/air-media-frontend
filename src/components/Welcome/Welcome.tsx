import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

interface Props {
    headline: string,
    content: string,
    link: string,
    linkTo: string,
    photo: string,
}

const Welcome: React.FC<Props> = ({headline, content, link, linkTo, photo}) => {
    const PHOTO = `./assets/${photo}`
  return (
    <div className="container-welcome">
        <img className="background" src={PHOTO} alt="img"/>
        <div className="container-text">
            <h2>{headline}</h2>
            <p>{content}</p>
            <Link to={link}>
            {linkTo}
        </Link>
        </div>
    </div>
  )
}

export default Welcome