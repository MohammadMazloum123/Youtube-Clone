import { Stack, Box } from "@mui/material"

const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        {item.id.vi}
      ))}
    </Stack>
  )
}

export default Videos
