import { worldChart } from "../data";
import PlayPause from "./PlayPause";
import React from "react";
import { useDispatch } from "react-redux";
import { setActiveSong, setActiveSongId, setIsPlaying } from "../reducer";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const TopPlay = () => {
  const topSongs = worldChart.slice(0, 5);
  const dispatch = useDispatch();
  const handlePlay = (song, id) => {
    dispatch(setActiveSong({song,id}));
    dispatch(setIsPlaying(true));
  };
  const handlePause = (song) => {
    dispatch(setIsPlaying(false));
  };
  return (
    <div className=" w-full  pt-4  text-white">
      <div className="flex justify-between">
        <p className="poppins-dark text-lg">Top Chart</p>
        <p>See more</p>
      </div>
      <div className="mt-7 flex flex-col gap-2">
        {topSongs.map((song, i) => {
          return (
            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-300/60 px-2 py-1 rounded-lg ">
              <p>{i + 1}.</p>
              <div className="flex flex-1 gap-1.5 ">
                <img
                  src={song.images.coverart}
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <p className="text-[13px]  text-white/100">{song.title}</p>
                  <p className="text-xs text-white/50">{song.subtitle}</p>
                </div>
                <div className="flex-1 flex justify-end items-center">
                  <PlayPause
                    handlePlay={() => handlePlay(song, i)}
                    handlePause={() => handlePause(song)}
                    song={song}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-7">
        <div className="flex justify-between">
          <p className="poppins-dark text-lg">Top Artist</p>
          <p>See more</p>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topSongs.map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "20%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              {/* <Link to={`/artists/${artist?.artists[0].adamid}`}> */}
              <img
                src={artist?.images?.background}
                alt="Name"
                className="rounded-full w-full object-cover"
              />
              {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
