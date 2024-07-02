import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos, ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const {id} = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setchannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  },[id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,115,1) 35%, rgba(121,9,115,1) 65%, rgba(9,30,121,1) 79%);}}>

        </div>
      </Box>
    </Box>
  )
}

export default ChannelDetail
