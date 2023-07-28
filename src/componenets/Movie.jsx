import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  MdInfoOutline,
  MdOutlineThumbUpAlt,
  MdOutlineThumbsUpDown,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Movie = ({ item }) => {
  const [Like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate=useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    show:Array
  });
  useEffect(()=>{
    if(localStorage.token!=undefined){
      setUser(JSON.parse(localStorage.loguser));
    }
  },[])
  const saveShow = async () => {
    if (user?.email) {
      setLike(!Like);
      setSaved(true);
      const save=({
              id: item.id,
              title: item.title,
              img: item.backdrop_path
        })
        // user.show.push(save)
        console.log(user.show)
        // savedShows.push(save)
        // localStorage.setItem("showman",JSON.stringify(savedShows))
        // console.log(JSON.parse(localStorage.showman))
    } else {
      alert("Please log in to save a movie");
    }
  };

  const handleInfo = () => {
    sessionStorage.setItem("infoItem", JSON.stringify(item));
    console.log(item)
    navigate("/desc");
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 overflow-hidden hover:h-64 hover:w-64">
      <img
        className="w-full object-cover block rounded hover:h-40 "
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      ></img>
      <div className=" invisible group-hover:visible text-gray-300 mt-4 break:all">
        <div className="text-xs md:text-sm font-bold flex-col justify-center items-center h-full text-left">
          <div>{item?.title}</div>
        </div>
        <div className="flex text-2xl space-x-2 mt-2">
          <p onClick={handleInfo}>{<MdInfoOutline />}</p>
          <p onClick={saveShow}>{Like ? <FaHeart /> : <FaRegHeart />}</p>
          <MdOutlineThumbUpAlt />
          <MdOutlineThumbsUpDown />
        </div>
      </div>
    </div>
  );
};
