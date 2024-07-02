import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({video:{id:{videoId}, snippet}}) => {
    return (
    <Card>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width: 358, height: 180}}
            />
        </Link>
        <CardContent sx={{backgroundColor}}>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>

            </Link>
        </CardContent>
    </Card>
    )
}

export default VideoCard
