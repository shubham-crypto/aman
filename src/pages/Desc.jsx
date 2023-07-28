import axios from "axios";
import React, { useEffect, useState } from "react";

export const Desc = () => {
  const [show, setShow] = useState({});
  useEffect(() => {
    var data=JSON.parse(sessionStorage.infoItem);
    setShow(data)
  },[]);

  // console.log(show);
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="lg:block absolute w-full h-full object-cover blur-md"
          src={`https://image.tmdb.org/t/p/original/${show?.poster_path}`}
          alt="/done"
        />
        <img
          className="absolute w-full h-full object-contain"
          src={`https://image.tmdb.org/t/p/original/${show?.poster_path}`}
          alt="/done"
        />
        <img
          className="hidden lg:block absolute w-full h-full object-cover blur-md"
          src={`https://image.tmdb.org/t/p/original/${show?.poster_path}`}
          alt="/done"
        />
        <div className="hidden lg:block absolute w-full h-full bg-gradient-to-r from-black"></div>
        <div className=" hidden lg:block absolute top-40 text-white p-5 text-xl">
          <div className="flex justify-center">
            <div className="flex-col w-full text-2xl">
              <p className="text-5xl text-violet-600">{show?.title}</p>
              <p>{show.adult ? "18+" : "Family"}</p>
              <p>language: {show?.original_language}</p>
              <p>Date: {show?.release_date}</p>
              <p>Popularity: {show?.popularity}</p>
              <p>AverageVote: {show?.vote_average}</p>
              <p>Votes: {show?.vote_count}</p>
            </div>
            <p className="w-full mt-10">
            <span className="text-3xl">Overview:</span> <br></br>
            {show?.overview}
          </p>
          </div>
        </div>
      </div>
    </>
  );
};
