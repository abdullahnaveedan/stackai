import React from "react";

const SideButton = ({ text, svg, isActive, onClick }) => {
  return (
    <button
      className={`w-[100%] h-9 py-3 mb-1 ${
        isActive
          ? "bg-gradient-to-r from-[#922991] to-[#eb456c] text-white"
          : "text-[#bf5670] hover:bg-gray-200"
      }  flex items-center pl-2 gap-4 rounded-lg sm:text-[11px] md:text-[12px]  xl:text-sm font-medium mt-2 outline-none`}
      onClick={onClick}
    >
      {React.cloneElement(svg, { fill: isActive ? "#fff" : "#bf5670" })}
      {text}
    </button>
  );
};

export default SideButton;
