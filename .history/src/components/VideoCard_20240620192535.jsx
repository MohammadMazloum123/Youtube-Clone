import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({video:{id:{videoId}, snippet}}) => {
    return (
    <Card sx={{width:{md:'320px'}}}>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width: 358, height: 180}}
            />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px'}}>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" color="#FFF" fontWeight="bold">
                    {snippet?.title.slice(0, 60) ||
                    demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
        </CardContent>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px'}}>
            <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" color="#FFF" fontWeight="bold">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize:12, color:'grey', ml:'5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
    )
}

export default VideoCard
