import { Link } from "react-router-dom";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({channelDetail}) => {
return (
    <Box sx={{
            boxShadow:'none', 
            borderRadius:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:{xs:'356px', md:'320px'},
            margin:'auto'
        }}>
        <Link to={`channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center',
                textAlign:'center', color:'#fff',
            }}>
                <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{height:'180px', width:'180px', borderRadius:'50%', mb:2, 
                    border:'1px solid #e3e3e3'
                }}>
                </CardMedia>
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{fontSize:14, color:'gray', ml:'5px'}}/>
                        {channelDetail?.statistics?.subscriberCount && (
                            <Typography>
                                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                                Subscribers
                            </Typography>
                        )}
                    </Typography>
            </CardContent>
        </Link>
    </Box>
)
}

export default ChannelCard
