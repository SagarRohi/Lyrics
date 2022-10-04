import { Routes, Route } from "react-router-dom";
import { Discover, Sidebar, SearchBar, TopPlay ,SongDetails} from "./components";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import MusicPlayer from "./components/Music/MusicPlayer";
const sidebarVariant = {
  open: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    x: -200,
    transition: {
      duration: 0.3,
    },
  },
};

const App = () => {
  const [isOpenSideBar, setisOpenSideBar] = useState(false);
  const { activeSong } = useSelector((state) => state.player);
  return (
    <motion.div
      initial={false}
      animate={isOpenSideBar ? "open" : "closed"}
      className="flex w-screen h-screen overflow-scroll relative bg-gradient-to-br from-black to-[#121286] "
    >
      {/* Mobile */}
      <motion.div
        className=" lg:hidden absolute z-10"
        variants={sidebarVariant}
      >
        <Sidebar handleClick={() => setisOpenSideBar(false)} />
      </motion.div>
      {/* Mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1 text-whit">
        <div className="flex justify-between items-center">
          <div>

            
          </div>
          <GiHamburgerMenu
            className="md:hidden text-xl text-white m-2"
            onClick={() => setisOpenSideBar(!isOpenSideBar)}
          />
        </div>
        <div className="md:hidden p-1 mb-4">
          <TopPlay />
        </div>
        <div className="flex md:flex-row flex-col ">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/songs/:songId" element={<SongDetails/>} />
            </Routes>
          </div>
          <div className="hidden md:block w-[40%] md:w-[42%] lg:w-[33%] xl:w-[25%] pr-2 ">
            <TopPlay />
          </div>
        </div>
      </div>
      {activeSong && (
        <div className="fixed bottom-0">
          <MusicPlayer />
        </div>
      )}
    </motion.div>
  );
};
export default App;
