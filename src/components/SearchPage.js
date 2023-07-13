import React, { useEffect, useState } from "react";
import { API_KEY } from "../helpers/constants";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { addDetails } from "../store/reducers/videoInfoSlice";
import Carousell from "./Carousell";

const SearchPage = () => {
  const [searchParams]= useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q"));
  const { text } = useSelector((state) => state.searchtext);
  const {isShowCarousel} = useSelector((state)=>state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    setSearchQuery(text);
    getSearchResults();
  }, [searchQuery]);

  // const t="Java";
  const getSearchResults = async () => {
    console.log(searchQuery);
    const response = await fetch(
      `http://localhost:3001/api/searchresults?key=${API_KEY}&q=${searchQuery}`,
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
      {/* {console.log(searchResults)} */}
      {searchResults && (
        <div>
          {/* {console.log(searchResults)} */}
          {isShowCarousel && <Carousell />}
        <div className={`flex flex-wrap justify-center ${isShowCarousel ? "mt-2" : "mt-20"}`}
        // className="flex flex-wrap justify-center mt-2"
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
