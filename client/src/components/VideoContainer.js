import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../helpers/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addDetails } from "../store/reducers/videoInfoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return videos?.length===0 ? (
    <Shimmer/>
  ) : (
    <div className="flex flex-wrap justify-center mt-6">
      {videos.map((video,index) => (
        <Link to={"/watch?v="+video.id}
        onClick={()=>dispatch(addDetails(video.id))}
        >
           <VideoCard key={index} info={video} />
           </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
