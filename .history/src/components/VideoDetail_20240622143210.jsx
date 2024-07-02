import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
    .then((data) => setVideos(data.items))
  }, [id])
  if(!videoDetail?.snippet) return 'Loading...';

  const { snippet : {title, channelId, channelTitle}, statistics : {viewCount, likeCount}} = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{position:'sticky', top:'86px', width:'100%'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
              <Typography color="#fff" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} py={1} px={2}>
                <Link to={`channel/${channelId}`}>
                  <Typography variant={{sm:'subtitle1', md:'h6'}} color='#fff'>
                    {channelTitle}
                    <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}}/>
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
