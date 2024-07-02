import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({video:{id:{videoId}, snippet}}) => {
    return (
    <Card>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <CardMedia image={}/>
        </Link>
    </Card>
    )
}

export default VideoCard
