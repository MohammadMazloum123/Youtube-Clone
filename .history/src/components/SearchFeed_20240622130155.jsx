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
    <Stack sx={{flexDirection:{sx:'column', md:'row'}}}>  
      <Box sx={{height:{sx: 'auto', md: '92vh'},
    borderRight:'1px solid #3d3d3d', px:{sx: 0, md: 2}}}>
        <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>

        <Typography className="copyright" variant="body2"
        sx={{mt : 1.5, color:"#fff"}}>
            Copyright 2024 MAZ
        </Typography>
      </Box>
     
    </Stack>
  )
}

export default SearchFeed
