import React from "react";
import "./ButtonVisa.css";
import { FaArrowRight } from "react-icons/fa6";

const ButtonVisa = ({ text, width = "160px" }) => {
  return (
    <button
      style={{ width }}
      className="btn1  bg-white flex items-center justify-center w-[160px] rounded-full relative h-[60px]"
    >
      <span className="ml-4 z-10 btn-text1 w-full text-app-blue-1 absolute top-0 left-2 h-full flex justify-start items-center pl-2">
        {text || "Get Started"}
      </span>
      <span className="z-20 right btn-icon1 w-fit bg-app-aqua-1 h-fit text-black rounded-full p-4 flex items-center justify-between  absolute -right-1.5">
        <p className="btn-icon-text1">{text || "Get Started"}</p>
        <FaArrowRight />
      </span>
    </button>
  );
};

export default ButtonVisa;
