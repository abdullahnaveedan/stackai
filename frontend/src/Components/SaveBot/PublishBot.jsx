import React from "react";


function PublishBot({ setShowModal }) {
    return (
      <div className="fixed top-0 left-0  w-[100vw] h-[100vh] flex  justify-center items-center bg-gray-900 bg-opacity-10 z-50">
        <div className="h-[250px] lg:w-[35%] w-[50%] shadow-custom  bg-white rounded-lg  transform transition-all duration-300">
          <div className="text-[#EB456C] font-[600] text-[24px] flex justify-end mr-4 ">
            <span className=" cursor-pointer" onClick={() => setShowModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-x mt-2"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </div>
          <div className="mx-11">
            <h1 className="text-[#BF5670] font-[600] text-lg">
              Version successfully deployed!
            </h1>
            <p className="text-[#57636C] font-[400] text-sm my-2">
              Review your UIs and APIs in the Exposrt Builder.
            </p>
          </div>
          <div className="flex justify-evenly mt-14">
            <button className="font-[600] bg-[#BF5670] rounded-[5px]   h-[45px] w-[140px] text-white text-sm">
              Later
            </button>
            <button className="font-[600] bg-[#BF5670] rounded-[5px] h-[45px] w-[140px] text-white text-sm">
              Go to Export
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default PublishBot;