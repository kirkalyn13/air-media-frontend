import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { useDispatch } from 'react-redux'
import { play } from '../../features/slices/watch'


const cardStyle = {
    display: "flex",
    backgroundColor: '#0097A7', 
    color: '#FFF', 
    fontWeight:"300", 
    justifyContent:"space-between",
    margin: "10px",
    height: "100px"
}

const typoStyles = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontWeight: "bold"
}

const buttonStyles = {
    height: "inherit",
    width: "inherit",
    marginRight: "0.5rem",
    color: "#FFF"
}

interface Props {
    videoID: number,
    title: string,
    genre: string,
}

const VideoDetails: React.FC<Props> = ({videoID, title, genre}) => {
    const dispatch = useDispatch()

    return (
    <Card 
    sx={{ minWidth: 275 }}
    style={cardStyle}>
        <CardContent>
            <Typography style={typoStyles} variant="h6" align="left" component="div">
            {title}
            </Typography>
            <Typography style={typoStyles} variant="caption" align="left" component="div">
            {genre}
            </Typography>
        </CardContent>
        <IconButton style={buttonStyles} 
            onClick={()=>{
                dispatch(play({
                    videoID,
                    title,
                    genre,
                }))
            }}>
            <PlayCircleOutlineIcon />
        </IconButton>
    </Card>
  )
}

export default VideoDetails