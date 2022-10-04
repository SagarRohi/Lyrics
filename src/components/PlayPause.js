import React from 'react'
import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa';
import { useSelector } from 'react-redux';
const PlayPause = ({handlePlay,handlePause,song}) => {
  const {activeSong,isPlaying}=useSelector((state)=>state.player);
  return (
    <>
    {activeSong?.title==song.title&&isPlaying?
    <FaPauseCircle onClick={handlePause} className='text-3xl text-white'/>:
    <FaPlayCircle onClick={handlePlay} className='text-3xl text-white'/>}
    </>
  )
}

export default PlayPause;