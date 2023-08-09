import React, { useEffect, useState } from 'react'
import { API_KEY } from '../helpers/constants';
import ShortsShimmer from './ShortsShimmer';

const Shorts = () => {

    const [shorts,setShorts] = useState([]);
    useEffect(()=>{
        getShorts();
    },[])
    const getShorts = async () => {
        const response = await fetch(
          `https://reac-tube-server.vercel.app/api/fetchshorts?key=${API_KEY}`,
          // `http://localhost:3001/api/fetchshorts?key=${API_KEY}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data?.data?.items);
        setShorts(data?.data?.items);
      };
  return shorts.length===0 ? <ShortsShimmer/> :  (
    <div className='flex justify-center w-full'>
        <div className='flex justify-center flex-col gap-5 mt-20'>
        {shorts.map((s)=>(
            <div className="flex w-[400px]" key={s?.id?.videoId}>
                <iframe
              className="rounded-3xl"
              width="330"
              height="570"
              autoFocus
              src={
                "https://www.youtube.com/embed/" +
                s?.id?.videoId +
                "?autoplay=0&mute=1&rel=1"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col gap-10 mt-36 ml-3">
              <span className="material-symbols-outlined text-2xl bg-gray-100 border rounded-full p-2 cursor-pointer  dark:bg-gray-800">
                thumb_up
              </span>
              <span className="material-symbols-outlined text-2xl  bg-gray-100 border rounded-full p-2 cursor-pointer  dark:bg-gray-800">
                thumb_down
              </span>
              <span className="material-symbols-outlined text-2xl  bg-gray-100 border rounded-full p-2 cursor-pointer  dark:bg-gray-800">
                chat
              </span>
              <span className="material-symbols-outlined text-2xl  bg-gray-100 border rounded-full p-2 cursor-pointer  dark:bg-gray-800">
                share
              </span>
            </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Shorts