import { Stack, Box } from "@mui/material"

const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.VideoId && <VideoCard/>}
          {item.id.VideoId && <VideoCard/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
