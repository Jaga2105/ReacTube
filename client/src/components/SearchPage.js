import React, { useEffect, useState } from "react";
import { API_KEY } from "../helpers/constants";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { addDetails } from "../store/reducers/videoInfoSlice";
import Carousell from "./Carousell";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q");
  const [searchResults, setSearchResults] = useState([]);
  const {isShowCarousel} = useSelector((state)=>state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    const response = await fetch(
      `https://reac-tube-server.vercel.app/api/searchresults?key=${API_KEY}&q=${searchQuery}`,
      // `http://localhost:3001/api/searchresults?key=${API_KEY}&q=${searchQuery}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data?.data?.items);
    setSearchResults(data?.data?.items);
  };
  return searchResults===undefined ? (
    <Shimmer />
  ) : (
    <div>
      {searchResults && (
        <div>
          {isShowCarousel && <Carousell />}
        <div className={`flex flex-wrap justify-center ${isShowCarousel ? "mt-2" : "mt-20"}`}
        >
        {searchResults.map((video) => (
          <Link
            to={"/watch?v=" + video.id.videoId}
            onClick={() => dispatch(addDetails(video.id.videoId))}
          >
            {/* {" "} */}
            <VideoCard key={video?.id?.videoId} info={video} />
          </Link>
        ))}
      </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
