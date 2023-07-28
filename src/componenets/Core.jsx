import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";
import { ImInfo } from "react-icons/im";
import { Desc } from "../pages/Desc";
import { Navigate, useNavigate } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";

export const Core = () => {
  const [shows, setAnime] = useState([]);

  const navigate = useNavigate();

  const [current, setcurrent] = useState(0);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      // console.log(response.data.results);
      setAnime(response.data.results);
    });
  }, []);

  const len = shows.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrent((prev) => {
        // console.log(prev)
        if (prev < len - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [len]);

  const anime = shows[current];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleInfo = () => {
    sessionStorage.setItem("infoItem", JSON.stringify(anime));
    // console.log(JSON.parse(sessionStorage.infoItem))
     navigate("/desc");
  };

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${anime?.backdrop_path}`}
          alt={anime?.title}
        ></img>
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{anime?.title}</h1>
          <div className="my-4 flex justify-start">
            <button className="border bg-violet-300 text-black border-gray-300 py-2 px-5 hover:bg-white">
              <div className="flex justify-between items-center text-lg ">
                <MdPlayArrow  />
                <span>Play</span>
              </div>
            </button>
            <button
              onClick={handleInfo}
              className="border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-violet-300"
            >
              <div className="flex justify-between items-center">
                <ImInfo className="mr-2"  />
                <span>View Info</span>

              </div>
            </button>
          </div>
          <p className="text-gray-400 text-sm ">
            Released: {anime?.release_date}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Vote: {anime?.vote_average}
          </p>
          {/* <p className="text-gray-400 text-sm mt-2">
            Lang: {anime?.original_language}
          </p> */}
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] mt-3 text-gray-200">
            {truncateString(anime?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};
