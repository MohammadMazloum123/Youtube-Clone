import { Link } from "react-router-dom";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({channelDetail}) => {
return (
    <Box sx={{boxShadow:'none', borderRadius:'20px'}}>
        <Link to={`channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center",
                textAlign:"center", color:"#fff",
            }}>
                <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.url}>

                </CardMedia>

            </CardContent>
        </Link>
    </Box>
)
}

export default ChannelCard