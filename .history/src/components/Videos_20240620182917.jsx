import { Stack, Box } from "@mui/material"

const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box>
          
        </Box>
        {item.id.VideoId && <}
      ))}
    </Stack>
  )
}

export default Videos