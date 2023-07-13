import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../store/reducers/appSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../helpers/constants";
import formatViewCount from "../helpers/formatViewCount";
import uploadTime from "../helpers/uploadTime";
import VideoDescription from "./VideoDescription";
import Comments from "./Comments";
import RelatedSuggestions from "./RelatedSuggestions";
import { addDetails } from "../store/reducers/videoInfoSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  

  const [movieId, setMovieId] = useState(searchParams.get("v"));
  const [videoInfo, setVideoInfo] = useState([]);
  const [comments,setComments] = useState([]);
  // const[description,setDescription] = useState("");
  // const descriptionArray = description.split(/[\n]+/);


  const { id } = useSelector((state)=>state.info);
  const {isMenuOpen} = useSelector((state)=>state.app);

  // useState(()=>{
  //   setMovieId(searchParams.get("v"));
  // },[id])



  const viewCount = formatViewCount(videoInfo[0]?.statistics?.viewCount);
  const uploadedTime = uploadTime(videoInfo[0]?.snippet?.publishedAt);
  const likeCount = formatViewCount(videoInfo[0]?.statistics?.likeCount);
  const description = videoInfo[0]?.snippet?.description ?? "";
  // const descriptionArray = description.split(/[\n]+/);

  const dispatch = useDispatch();
  

  useEffect(() => {
    setMovieId(searchParams.get("v"));
    // setDescription(videoInfo[0]?.snippet?.description);
    dispatch(closeMenu());
    dispatch(addDetails(movieId));
    movieDetailsById();
    fetchComments()
  }, [movieId,id]);



  const movieDetailsById = async () => {
    const response = await fetch(
      `http://localhost:3001/api/moviedetailsbyid?key=${API_KEY}&id=${movieId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setVideoInfo(data?.data?.items);
  };

  const fetchComments = async () => {
    const response = await fetch(
      `http://localhost:3001/api/comments?key=${API_KEY}&id=${movieId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setComments(data?.data?.items)
  };
  return videoInfo===[] ? (
    <div className="mt-30">Loading...</div>
  ) : (
    <div className="flex px-5 mt-20 mx-10">
      <div className= {`${isMenuOpen? "w-[700px]" : "w-[800px]"}`}>
        <iframe
          width={`${isMenuOpen? "700" : "800"}`}
          height={`${isMenuOpen? "400" : "500"}`}
          autoFocus
          src={
            "https://www.youtube.com/embed/" +
            movieId +
            "?autoplay=1&mute=1&rel=0&loop=1"
          }
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <h1 className=" py-4 font-bold text-xl">
          {videoInfo[0]?.snippet?.title}
        </h1>
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-lg">
                {videoInfo[0]?.snippet?.channelTitle}
              </h2>
              <div className="flex">
                <h3 className="mr-2">{viewCount} views</h3>
                <h3>{uploadedTime}</h3>
              </div>
            </div>
            <button className="bg-black text-white rounded-3xl h-10 py-2 px-4 mt-2 ml-8 dark:bg-gray-100 dark:text-black">
              <span>Subscribe</span>
            </button>
          </div>
          <div className="flex">
            <div className="flex h-10 justify-center mt-2 dark:text-black">
              <div className="bg-gray-100 rounded-s-3xl py-2 px-6 cursor-pointer hover:bg-gray-300">
                <span>{likeCount}</span>
              </div>
              <div className=" border-r-2 border-gray-300 "></div>
              <span className="material-symbols-outlined py-2 px-4 rounded-e-3xl cursor-pointer bg-gray-100 hover:bg-gray-300">
                thumb_down
              </span>
            </div>
            <div className=" flex h-10 mt-2 ml-6 bg-gray-100 rounded-3xl px-4 py-2 cursor-pointer hover:bg-slate-200 dark:text-black">
              <span className="material-symbols-outlined">share</span>
              <span className="ml-2 font-medium">Share</span>
            </div>
          </div>
        </div>
        {description!=="" && (
          <VideoDescription description={description} />
        )}

        {comments.map((comment)=>(
          <Comments key={comment.id} comment={comment}/>
        ))}
      </div>
      <RelatedSuggestions/>
    </div>
  );
};

export default WatchPage;

// justify-between rounded-2xl bg-gray-200 p-2 h-10 mt-2 cursor-pointer
