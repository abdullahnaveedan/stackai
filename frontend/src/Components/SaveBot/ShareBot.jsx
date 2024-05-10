import React from "react";


function ShareBot({ setShowModal }) {
    return (
      <div className="fixed top-0 left-0  w-[100vw] h-[100vh] flex  justify-center items-center bg-gray-900 bg-opacity-10 z-50">
        <div className="h-[320px] lg:w-[45%] w-[60%] shadow-custom  bg-white rounded-lg  transform transition-all duration-300">
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
            <h1 className="text-[#BF5670] font-[600] text-lg">Share Flow</h1>
            <p className="text-[#57636C] font-[600] text-sm my-2 lg:w-[70%] w-[100%] ">
              Share this flow other users by enterting their email addresses
              below.
            </p>
            <label className="text-[#BF5670] font-[600] text-lg">Email</label>
  
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Email (or comma seprated list)"
                className="text-[#BF5670] h-[50px] pl-2 font-[400] w-[80%] border-[2px] border-[#BF5670] rounded-lg text-sm outline-none"
              />
              <div className="bg-[#BF5670] rounded-lg text-white ml-2 h-[50px] w-[100px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill mr-1"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
                <p className="font-[600] text-lg">Share</p>
              </div>
            </div>
            <p className="text-[#57636C] font-[600] text-sm mt-5">
              The shared flow will be a copy of your current flow
              <br />
              Any changes to your flow will not be reflected to the shared flow
            </p>
          </div>
        </div>
      </div>
    );
  }


  export default ShareBot;