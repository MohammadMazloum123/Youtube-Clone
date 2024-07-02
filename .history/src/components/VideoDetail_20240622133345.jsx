import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box, Stack } from "@mui/material";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{position:'sticky'}}>

          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
