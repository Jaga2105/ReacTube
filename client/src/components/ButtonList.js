import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchText } from "../store/reducers/searchResultSlice";
import { showCarousel } from "../store/reducers/appSlice";


const ButtonList = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-wrap justify-center h-10 mx-2 ">
      {list.map((li) => (
        <Link to={"/results?q="+li}
        onClick={()=>{
          dispatch(searchText(li))
          dispatch(showCarousel(true))
        }}>
          <button key={li}
            className="bg-gray-100 hover:bg-gray-300 px-4 m-1 w-auto h-9 rounded-xl focus:bg-black focus:text-white  dark:bg-gray-800 dark:text-gray-300 dark:focus:bg-white dark:focus:text-black  dark:hover:bg-gray-600"
          >
            {li}
          </button>
          </Link>
      ))}
    </div>
  );
};

export default ButtonList;