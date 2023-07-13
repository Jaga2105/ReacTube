import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name:"searchtext",
    initialState:{
        text:""
    },
    reducers:{
        searchText:(state,action)=>{
            state.text=action.payload;
            console.log(state)
        }
    }
})
export const {searchText}=searchResultSlice.actions;
export default searchResultSlice.reducer;