import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
  })
  return (
    <div>
      
    </div>
  )
}

export default VideoDetail
