import React from "react";
import { maxLength } from "../helpers/constants";
import cropTitle from "../helpers/cropTitle";
import formatViewCount from "../helpers/formatViewCount";
import uploadTime from "../helpers/uploadTime";

const VideoCard = ({ info }) => {
  // const {snippet,statistics} = info;
  // const {channelTitle, title,thumbnails} = snippet;
  const title = info?.snippet?.title;
  const channelTitle = info?.snippet?.channelTitle;
  const croppedTitle = cropTitle(title, maxLength);

  const viewCount = info?.statistics?.viewCount;
  const formattedViewCount = formatViewCount(viewCount ? viewCount : "N/A");

  const publishedAt = info?.snippet?.publishedAt;
  const timeSincePublished = uploadTime(publishedAt);
  return (
    <div className="p-1 mx-1 my-2 shadow-sm w-[360px] h-[360px] dark:shadow-slate-700 dark:rounded-b-lg">
      <img
        className="rounded-xl hover:rounded-none w-[360px]"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="p-2">
      <h1 className="font-bold mt-2">{croppedTitle}</h1>
      <h3>{channelTitle}</h3>
      <div className="flex justify-start">
        <h5 className="">{formattedViewCount }</h5>
        <h5 className="ml-4">{timeSincePublished}</h5>
      </div>
      </div>
    </div>
  );
};

export default VideoCard;
