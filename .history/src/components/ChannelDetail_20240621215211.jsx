import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos, ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}"`)
  })

  return (
    
  )
}

export default ChannelDetail
