import {createSlice} from '@reduxjs/toolkit';

const initialState={
 activeSong:null,
 isPlaying:false,
 activeSongId:-1,
 songsList:[],
}

const slice=createSlice({
    name:'player',
    initialState,
    reducers:{
       setActiveSong:(state,action)=>{
        const {song,id}=action.payload;
         state.activeSong=song;
         state.activeSongId=id;
       },
       setIsPlaying:(state,action)=>{
        state.isPlaying=action.payload;
       },
       setActiveSongId:(state,action)=>{
        if(action.payload<0||action.payload>=state.songsList.length) return;
        state.activeSongId=action.payload;
        state.activeSong=state.songsList[action.payload];
       },
       setSongsList:(state,action)=>{
        state.songsList=action.payload;
       }
    }
})
export const{setActiveSong,setIsPlaying,setActiveSongId,setSongsList}=slice.actions;
export default slice.reducer;