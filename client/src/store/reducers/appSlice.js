import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isShowCarousel: true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu: (state)=>{
            state.isMenuOpen=false;
        },
        showCarousel: (state,action)=>{
            state.isShowCarousel=action.payload;
        }
    }
})

export const {toggleMenu, closeMenu,showCarousel} =appSlice.actions;
export default appSlice.reducer;