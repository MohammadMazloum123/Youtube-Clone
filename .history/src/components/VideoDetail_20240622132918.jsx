import { useState } from "react"
import { useParams } from "react-router-dom";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();

  
  return (
    <div>
      
    </div>
  )
}

export default VideoDetail
