import React from "react";
import cropTitle from "../helpers/cropTitle";
import formatViewCount from "../helpers/formatViewCount";
import uploadTime from "../helpers/uploadTime";

const SuggestionCard = ({ suggestion }) => {
  const title = suggestion?.snippet?.title;
  const channelTitle = suggestion?.snippet?.channelTitle;
  const maxLength=40;
  const croppedTitle = cropTitle(title, maxLength);

  const publishedAt = suggestion?.snippet?.publishedAt;
  const timeSincePublished = uploadTime(publishedAt);
  return (
    <div className="flex mb-4 ml-10 cursor-pointer">
      <div className="bg-gray-200 w-[200px] h-[100px] rounded-xl dark:bg-gray-800">
      <img
        src={suggestion?.snippet?.thumbnails?.medium?.url}
        alt="video-img"
        className="w-[200px] rounded-xl"
      />
      </div>
      <div className="px-2 py-1 w-[250px]">
        <h2 className="font-semibold mb-2">{croppedTitle}</h2>
        <h3 className="text-normal">{channelTitle}</h3>
        <span className="text-sm">{timeSincePublished}</span>
      </div>
    </div>
  );
};

export default SuggestionCard;
