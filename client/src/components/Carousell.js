import React from 'react'
import { Carousel } from "react-responsive-carousel";
import ButtonList from "./ButtonList";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const list = [
  "T-series",
  "akshay saini",
  "Music",
  "Trending",
  "Cricket",
  "Live",
  "Sports",
  "Gaming",
  "Computer Science",
  "Trailers",
  
];

const list1 = [
  "Mixes",
  "Jukebox",
  "Kedarnath",
  "Arijith Singh",
  "CSS",
  "Tourist destination",
  "Lionel Messi",
  "India national cricket team ",
];

const Carousell = () => {
  return (
    <div>
        <Carousel
            
            showIndicators={false}
            showThumbs={true}
            showStatus={false}
            centerMode={true}
            autoFocus={false}
            transitionTime={8000}
            swipeable={true}
            className=" mt-20 mb-6 h-12"
          >
            <ButtonList list={list} />
            <ButtonList list={list1} />
          </Carousel>
    </div>
  )
}

export default Carousell