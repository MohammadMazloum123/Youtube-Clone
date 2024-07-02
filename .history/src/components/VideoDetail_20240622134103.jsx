import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box, Stack } from "@mui/material";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
  }, [id])
  if(!videoDetail?.snippet) return "Loading...";

  const { snippet : {}}

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{position:'sticky', top:'86px', width:'100%'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
