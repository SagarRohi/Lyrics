import PlayPause from "./PlayPause";
import { useDispatch } from "react-redux";
import { setActiveSong, setIsPlaying, setActiveSongId } from "../reducer";
import { Link } from "react-router-dom";
const SongCard = ({ song, id }) => {
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(setActiveSong({ song, id }));
    dispatch(setIsPlaying(true));
  };
  const handlePause = () => {
    dispatch(setIsPlaying(false));
  };
  return (
    <div className="w-full h-[250px] bg-gray-500/40 p-4 shadow-sm shadow-gray-900 cursor-pointer">
      <div className="relative group z-0">
        <div
          className=" hidden group-hover:flex absolute left-0 right-0 top-0 bottom-0  
        bg-gray-900 bg-opacity-40  justify-center items-center"
        >
          <PlayPause
            handlePause={handlePause}
            handlePlay={handlePlay}
            song={song}
          />
        </div>
        <img src={song.images.coverart} alt="hi" />
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <Link
          to={`/songs/${song?.key}`}
          className="text-[13px]  text-white/100"
        >
          {song.title}
        </Link>
        <p className="text-xs text-white/50">{song.subtitle}</p>
      </div>
    </div>
  );
};

export default SongCard;
