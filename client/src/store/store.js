import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";
import searchSlice from "./reducers/searchSlice";
import searchResultSlice from "./reducers/searchResultSlice";
import videoInfoSlice from "./reducers/videoInfoSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        searchtext:searchResultSlice,
        info:videoInfoSlice,
    },
})

export default store