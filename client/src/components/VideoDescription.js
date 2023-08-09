import React, { useEffect, useState } from 'react'

const VideoDescription = ({description}) => {
    const [descriptionArray,setDescriptionArray] = useState([]);
    const [expandDescription, setExpandDescription] = useState(false);
    useEffect(()=>{
        setDescriptionArray(description.split(/[\n]+/));
    },[description])
  return (
    <div className={`relative z-10 bg-gray-100 mt-2 p-4 rounded-xl ${expandDescription ? "h-auto" : "h-20 overflow-hidden"} dark:bg-gray-800`}>
        <h2 className='font-bold text-xl mb-2'>Description:</h2>
        {
            descriptionArray.map((d,index)=>(
                <h5 key={index}>{d}</h5>
            ))
        }
        <div className={`absolute z-20 backdrop-blur-sm  ${expandDescription ? "bottom-0 right-4" : "top-14 right-4 focus"}`}
        onClick={()=>setExpandDescription(!expandDescription)}
        //  className='absolute z-20 top-14 right-10'
         >
            <span className='font-bold text-lg cursor-pointer'>{expandDescription ? "Show less" : "Show more"}</span>
        </div>
    </div>
  )
}

export default VideoDescription