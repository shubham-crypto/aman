import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Movie } from "../componenets/Movie";
import axios from "axios";

export const Account = () => {
  const user = JSON.parse(localStorage.loguser);

  const [people, setpeople]=useState([]);

  useEffect(() => {
    axios.post("http://localhost:5000/values")
    .then(res=>{
      setpeople(res.data.people)

    })
  }, []);

  return (
    <>
      <div className="h-full w-full">
        <div className="w-full h-full">
          <div className="border-2 relative top-32 w-full  flex-col ">
            <div className="h-64 w-full flex justify-center space-x-4">
              <div className=" h-full  w-64 border-4 rounded-full overflow-hidden">
                <img
                  className="w-full h-screen object-cover blur-3xl"
                  src="account.jpg"
                  alt="demo"
                ></img>
              </div>
            </div>
            <div className=" flex-col w-full">
           
              {people.map((item , id)=>(
                <div className="h-32 border-2"></div>
              ))}
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};
