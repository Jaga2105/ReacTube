import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (

    <div className="w-30 bg-fixed shadow-lg my-16 p-4 dark:shadow-white">
      <ul className="overflow-hidden">
        <li className="flex justify-center my-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <Link to={"/"}>
            <span className="material-symbols-outlined p-1 font-thin">
              Home
            </span>
            <span className="p-1 text-sm">Home</span>
          </Link>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <Link to={"/shorts"}>
            <span className="material-symbols-outlined p-1 font-thin">
              movie
            </span>
            <span className="p-1 text-sm">Shorts</span>
          </Link>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            subscriptions
          </span>
          <span className="p-1 text-sm">Subs...</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            video_library
          </span>
          <span className="p-1 text-sm">Library</span>
        </li>
        <div className="border border-gray-300 my-4"></div>
        <li className="flex justify-center my-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            history
          </span>
          <span className="p-1 text-sm">History</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            thumb_up
          </span>
          <span className="p-1 text-sm">Liked</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">pace</span>
          <span className="p-1 text-sm">Watch</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            settings
          </span>
          <span className="p-1 text-sm">Settings</span>
        </li>
        <div className="border border-gray-300 my-4"></div>
      </ul>
    </div>
  );
};

export default Sidebar;
