import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:'column', md:'row'}}}>  
      <Box sx={{height:{sx: 'auto', md: '92vh'},
    borderRight:'1px solid #3d3d3d', px:{sx: 0, md: 2}}}>
        <SideBar/>
        <Typography className="copyright" variant="body2"
        sx={{mt : 1.5, color:"#fff"}}>
            Copyright 2024 MAZ
        </Typography>
      </Box>
      <Box p={2}
      sx={{overflowY:'auto', height:90
      }}>

      </Box>
    </Stack>
  )
}

export default Feed
