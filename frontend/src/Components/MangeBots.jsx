import React, { useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";
import PublishBot from "./SaveBot/PublishBot";
import ShareBot from "./SaveBot/ShareBot";
import RunBot from "./SaveBot/RunBot";
import SaveBots from "./SaveBot/SaveBots";

const ManageBots = () => {
  const [active, setActive] = useState(null);
  const [showmodal, setShowModal] = useState(false);
  const clickHandler = () => {
    setShowModal(!showmodal);
  };
  const navbarbutton = [
    {
      title: "Save",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      ),
      title: "Run",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"
          />
          <path
            fillRule="evenodd"
            d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z"
          />
        </svg>
      ),
      title: "Share",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-rocket-takeoff-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" />
          <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925" />
        </svg>
      ),

      title: "Publish",
    },
  ];
  return (
    <>
      <div className="w-full h-full flex bg-gray-100 items-center justify-center">
        <div className=" w-[15%] h-[100vh] flex flex-col  items-center">
          <h1 className=" font-bold text-[#BF5670] md:text-xl xl:text-2xl mt-8 mb-9 ">
            Simple ChatBot
          </h1>
        </div>
        <div className=" w-[83%] h-[90vh] bg-white rounded-3xl overflow-hidden">
          <div className="w-[100%] h-[18%] bg-gradient-to-r to-[#922991] from-[#EB456C] flex items-center justify-end pr-10">
            <div className="flex  items-center  text-white border border-[#ffff] w-[400px] h-[50px] rounded-lg text-sm font-[600]">
              {navbarbutton.map((button, index) => (
                <div
                  className={`flex items-center justify-center h-[35px] w-[100px] mx-2 cursor-pointer ${
                    index === active
                      ? "bg-white text-[#EB456C] rounded-md w-[120px] "
                      : ""
                  }`}
                  key={index}
                  onClick={() => setActive(index)}
                >
                  <div
                    className="h-full w-full flex items-center justify-center"
                    onClick={clickHandler}
                  >
                    <div>{button.svg}</div>
                    <div className="ml-2">{button.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <CategoryForm />
          </div>

          <div>
            {showmodal && active === 3 && (
              <PublishBot setShowModal={setShowModal} />
            )}
            {showmodal && active === 2 && (
              <ShareBot setShowModal={setShowModal} />
            )}
            {showmodal && active === 1 && (
              <RunBot setShowModal={setShowModal} />
            )}
            {showmodal && active === 0 && (
              <SaveBots
                setShowModal={setShowModal}
                showmodal={showmodal}
                active={active}
                setActive={setActive}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageBots;


