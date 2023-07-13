import { createSlice } from "@reduxjs/toolkit";

const videoInfoSlice = createSlice({
    name:"info",
    initialState:{
        id:"",
    },
    reducers:{
        addDetails:(state,action)=>{
            state.id=action.payload;
        }
    }
})

export const {addDetails} =videoInfoSlice.actions;
export default videoInfoSlice.reducer;