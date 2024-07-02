import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(``)
  })
  return (
    <div>
      
    </div>
  )
}

export default VideoDetail
