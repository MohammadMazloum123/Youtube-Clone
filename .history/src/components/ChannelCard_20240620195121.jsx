import { Link } from "react-router-dom";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({channelDetail}) => {
return (
    <Box sx={{
            boxShadow:'none', 
            borderRadius:'20px',
            display:'flex',
            jus
        }}>
        <Link to={`channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center",
                textAlign:"center", color:"#fff",
            }}>
                <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{height:'180px', width:'180px', borderRadius:'50%', mb:2, 
                    border:'1px solid #e3e3e3'
                }}>
                    
                </CardMedia>

            </CardContent>
        </Link>
    </Box>
)
}

export default ChannelCard
