import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${}`)
    .then((data) => setVideos(data.items))
  }, []);

  return (
    
  )
}

export default SearchFeed
