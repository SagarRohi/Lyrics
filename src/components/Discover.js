import { genres } from "../assests/constants";
import { MdArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SongCard from "./SongCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setSongsList } from "../reducer";
import { worldChart,data } from "../data";
const Discover = () => {
  const { songsList } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [loaded,setLoaded]=useState(false);
  const [currGenre,setCurrGenre]=useState("POP");
  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
    //   headers: {
    //     "X-RapidAPI-Key": "1286519813msh0ac994dc9844d46p1a8611jsnedfaefa5d20c",
    //     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     dispatch(setSongsList(response.data));
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    dispatch(setSongsList(data[currGenre]));
    setLoaded(true);
  }, [currGenre]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="p-1 h-full text-white"
    >
      <div className="flex justify-between items-center relative  ">
        <p className="poppins-dark text-[24px] p-2">Discover</p>
        <div className="absolute right-0 top-0 h-0">
          <button
            className="bg-slate-100/80
            font-semibold rounded-lg 
             w-32 m-2 px-1 py-1 text-slate-800 flex justify-between items-center"
          >
            <p>{currGenre}</p>
            <motion.div
              variants={{
                open: {
                  rotate: 180,
                },
                closed: {
                  rotate: 0,
                },
              }}
            >
              <MdArrowDropDown
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl"
              />
            </motion.div>
          </button>

          <motion.div
            variants={{
              open: {
                opacity: 1,
                scaleY: 1,
                originY: 0,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.03,
                },
              },
              closed: {
                opacity: 0,
                scaleY: 0,
                transition: {
                  duration: 0.1,
                },
              },
            }}
            className="bg-gray-500/40 text-white/90 backdrop-blur-lg 
           mt-3 flex flex-col   rounded-lg poppins-400 overflow-hidden relative z-10"
          >
            {genres.map((genre) => {
              return (
                <motion.div
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                    },
                    closed: {
                      opacity: 0,
                      y: 25,
                    },
                  }}
                  onClick={()=>{
                    if(currGenre===genre.title.toUpperCase()) return;
                    setLoaded(false);
                    setCurrGenre(genre.title.toUpperCase());
                    setIsOpen(!isOpen);
                  }}
                  className= {`cursor-pointer md:font-medium 
                  hover:bg-white  hover:text-black px-2 py-1 ${currGenre==genre.title.toUpperCase()?"text-purple-400":""}`}
                >
                  {genre.title}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={{
          open: {
         
            transition: {
            
               staggerChildren:0.02
            },
          },
          close:{
           
          }
        }}
        animate={loaded?"open":"close"}
        initial={false}
        className="w-full grid grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 gap-y-6 md:overflow-scroll h-[85vh] mt-3"
      >
        {songsList.map((song, id) => {
          return <motion.div 
          variants={{
            close:{
              opacity:0,
              y:1200,
            },
            open:{
              opacity:1,
              y:0,
              transition:{
                duration:0.5,
                ease:"easeInOut"
              }
            }
          }}
          // initial="close"
          className="w-[160px]"
          >
             <SongCard key={id} song={song} id={id} />
          </motion.div>
        })}
      </motion.div>
    </motion.div>
  );
};

export default Discover;
