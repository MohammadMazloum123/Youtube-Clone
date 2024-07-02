import { Link } from "react-router-dom";
import { Box, Typography, CardContent } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({channelDetail}) => {
return (
    <Box sx={{boxShadow:'none', borderRadius:'20px'}}>
        <Link to={`channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{flexDirection:"column", }}>

            </CardContent>
        </Link>
    </Box>
)
}

export default ChannelCard
