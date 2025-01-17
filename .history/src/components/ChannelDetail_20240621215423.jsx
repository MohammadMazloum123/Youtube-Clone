import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos, ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const []
  const {id} = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}"`)
      .then((data) => setchannelDetail(data?.items[0]));
    fetchFromAPI(`channels?part="snippet&id=${id}"`)
      .then((data) => setchannelDetail(data?.items[0]));
  },[id])

  return (
    
  )
}

export default ChannelDetail
