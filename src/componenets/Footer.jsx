import React from "react";

const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const fulldate = [year, month, day].join("-");
  return (
    <>
      <div className=" text-white text-center  mt-auto bottom-0 h-10  w-full">
        <p className="leading-10">@{fulldate} all rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
