import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCarousel, toggleMenu } from "../store/reducers/appSlice";
import { cacheResults } from "../store/reducers/searchSlice";
import { searchText } from "../store/reducers/searchResultSlice";
import {BsMoonStarsFill,BsFillSunFill} from "react-icons/bs"
import Logo from "../assets/ReactTube.png";
import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

const Head = () => {
  const [suggestionQuery, setSuggestinQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  

  const clickOutSideRef=useRef(null);
  const inputRef = useRef(null);
     const suggestionDivRef = useRef(null);
  

  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[suggestionQuery]) {
        setSuggestions(searchCache[suggestionQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    // checking code

    // const handleClickOutside = (e)=>{
    //   // if(showSuggestions && clickOutSideRef.current &&
    //   //   !clickOutSideRef.current.contains(e.target) && inputRef.current!==e.target){
    //   //     setShowSuggestions(false)
    //   //   }
    //   if (
    //     suggestionDivRef.current &&
    //     !suggestionDivRef.current.contains(e.relatedTarget)
    //   ) {
    //     setShowSuggestions(false);
    //     // Additional functionality when focus is withdrawn
    //   }
    // }


    // checking code
    


    return () =>{
      clearTimeout(timer);
      
    } 
  }, [suggestionQuery]);

// Handling input propagation
const handleInputPropagation = () =>{
  // e.stopPropagation();
  setShowSuggestions(true);
}


  const getSuggestions = async () => {
    const data = await fetch(
      `http://localhost:3001/api/searchsuggestions?q=${suggestionQuery}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await data.json();
    // const searchQueryArray = json.data[1];
    // console.log(json.data[1]);
    setSuggestions(json.data[1]);
    dispatch(cacheResults({ [suggestionQuery]: json.data[1] }));
  };
  return (
    <div
    className="flex justify-between fixed w-full h-16 z-50 bg-white  dark:bg-black dark:text-white"
     >
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mx-8 mt-4 cursor-pointer"
          src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-9.jpg"
          alt="menu"
        />
        <img className="h-8 mt-4 w-32 rounded-sm" src={Logo} alt="logo" />
      </div>
      <div className="px-10 flex"
          ref={clickOutSideRef}
          >
        <div className="flex w-[500px] border border-gray-200 rounded-l-full p-2 my-2 shadow-md h-11 border-r-0 dark:shadow-neutral-500">
          <input
            className="w-[500px] outline-0 px-3 py-3 font-medium text-xl dark:bg-black dark:text-white"
            type="text"
            placeholder="Search"
            value={suggestionQuery}
            ref={inputRef}
            onChange={(e) => setSuggestinQuery(e.target.value)}
            onFocus={() => handleInputPropagation}
            // onBlur={() => setShowSuggestions(false)}
          />
          {suggestionQuery !== "" && (
            <span
              className="material-symbols-outlined cursor-pointer text-2xl mb-4 dark:hover:bg-gray-700"
              onClick={() => setSuggestinQuery("")}
            >
              close
            </span>
          )}
        </div>
        <div>
        <Link to={"/results?q="+suggestionQuery}>
          <button 
          type="submit"
          className="h-11 w-14 bg-gray-100 border border-gray-300 mt-2 px-2 py-3 shadow-md rounded-r-full dark:bg-black dark:text-white  dark:shadow-neutral-500"
          onClick={()=>{
            dispatch(searchText(suggestionQuery))
            dispatch(showCarousel(false))
            setShowSuggestions(false)
          }}
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          </Link>
        </div>
        {showSuggestions && (
          <div className="z-10 bg-white w-[500px] absolute my-16   rounded-lg shadow-md dark:bg-black dark:text-white  dark:shadow-slate-400"
          ref={suggestionDivRef}
          >
            <ul>
              <Link to={"/results?q="+suggestionQuery}>
                {suggestions.map((s) => (
                  <div
                    key={s}
                    className="flex mb-2 px-4 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-800"
                    onClick={()=>{
                      setSuggestinQuery(s)
                      dispatch(searchText(s))
                      setShowSuggestions(false)
                    }}
                  >
                    <span className="material-symbols-outlined mr-2 my-1">
                      Search
                    </span>
                    <li className="text-xl font-medium mb-1">{s}</li>
                  </div>
                ))}
              </Link>
            </ul>
          </div>
        )}
        <span className="material-symbols-outlined mx-3 my-2 p-3 hover:bg-gray-200 rounded-full dark:hover:bg-gray-800">
          mic
        </span>
      </div>
      <ThemeToggler/>
      <div className="flex ">
        <span className="material-symbols-outlined font-thin mx-4 my-3 hover:bg-gray-200 rounded-full p-2 h-10 dark:hover:bg-gray-800">
          auto_videocam
        </span>
        <span className="material-symbols-outlined font-thin mx-4 my-3  hover:bg-gray-200 rounded-full p-2 h-10 dark:hover:bg-gray-800">
          notifications
        </span>
        <img
          className="h-10 mt-3 mx-3 rounded-full"
          src="data:image/png;base64,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"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
