"use client";
import React from "react";
import Image from "next/image";

const CustomButton = ({ title, containerStyle, handleClick, btnType }) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}
        btnType
      >
        <span className={"flex-1"}>{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
