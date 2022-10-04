import React, { useEffect, useRef } from "react";
import {
  FaPauseCircle,
  FaPlayCircle,
  FaFastForward,
  FaFastBackward,
} from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setActiveSongId } from "../../reducer";
const MusicPlayer = () => {
  const audioRef = useRef();
  const dispatch = useDispatch();
  const { isPlaying, activeSong, activeSongId } = useSelector(
    (state) => state.player
  );
  useEffect(() => {
    if (!isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [activeSong, isPlaying]);

  return (
    <div className="h-16 w-screen bg-gray-500/40 backdrop-blur-md	">
      <audio controls ref={audioRef} className="hidden">
        <source src={activeSong?.hub?.actions[1]?.uri} />
      </audio>
      <div className="flex justify-center items-center h-full cursor-pointer gap-3 text-white text-xl relative">
        <div className="h-full absolute left-4 flex items-center gap-2">
          <img
            src={activeSong?.images.coverart}
            className="h-12 w-12 animate-spin rounded-full"
          />
          <div className="flex-col leading-4 hidden md:flex">
            <div className="text-sm flex items-center gap-1 ">
              <p>{activeSong.title}</p>
              <div>
                <BsMusicNoteBeamed className="animate-bounce"/>
              </div>
            </div>
            <p className="text-[13px] text-gray-100/70">
              {activeSong.subtitle}
            </p>
          </div>
        </div>
        <FaFastBackward
          onClick={() => dispatch(setActiveSongId(activeSongId - 1))}
        />
        {isPlaying ? (
          <FaPauseCircle
            onClick={() => dispatch(setIsPlaying(false))}
            className="text-[52px]"
          />
        ) : (
          <FaPlayCircle
            onClick={() => dispatch(setIsPlaying(true))}
            className="text-[52px]"
          />
        )}
        <FaFastForward
          onClick={() => dispatch(setActiveSongId(activeSongId + 1))}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
