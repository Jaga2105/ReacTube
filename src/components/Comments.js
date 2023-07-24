import React from 'react'
import uploadTime from '../helpers/uploadTime';

const Comments = ({comment}) => {
    const userName = comment?.snippet?.topLevelComment?.snippet?.authorDisplayName;
    const userImg = comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl;
    const commentText = comment?.snippet?.topLevelComment?.snippet?.textDisplay;
    const commentedTime =uploadTime(comment?.snippet?.topLevelComment?.snippet?.publishedAt);
  return (
    <div className='flex my-4 cursor-pointer'>
        <div className='mr-4'>
            <img className="rounded-full" src={userImg} alt="img" />
        </div>
        <div>
            <span className='font-bold'>@{userName}</span>
            <span className='ml-4 text-sm'>{commentedTime}</span>
            <div>
                <span>{commentText}</span>
            </div>
        </div>
    </div>
  )
}

export default Comments