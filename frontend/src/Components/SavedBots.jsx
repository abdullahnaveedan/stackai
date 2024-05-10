import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Marksvg, Threedotsvg } from "./Common/Svg";
import { useNavigate } from "react-router-dom";

function SavedBots() {
  const [id, setId] = useState(null);
  const [getBots, setGetBots] = useState([]);
  const [getname, setGetname] = useState("");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const navigate = useNavigate()
  const fetchUserId = async () => {
    const userName = localStorage.getItem("username");
    const url = "https://customgbt.pythonanywhere.com/api/fetch/id/";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user ID");
      }

      const data = await response.json();
      console.log("user::::",data)
      const userId = data.user_id;
      setId(userId);
      console.log("User ID:", userId);
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  };

  useEffect(() => {
    fetchUserId();
    const userName = localStorage.getItem("username");
    setGetname(userName);
  }, []);

  useEffect(() => {
    const fetchBots = async () => {
      if (id) {
        try {
          const response = await fetch(
            `https://customgbt.pythonanywhere.com/api/user/getBots?username=${id}`
          );
          if (response.ok) {
            const data = await response.json();
            setGetBots(data.payload);
            console.log("Signed up user", data.payload);
          } else {
            console.error("Failed to fetch");
          }
        } catch (error) {
          console.error("Error fetching", error);
        }
      }
    };

    fetchBots();
  }, [id]);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const botHandler = () => {};

  return (
    <div>
      <h1 className="text-xl text-[#bf5670] font-[600] ml-8">My Assistant</h1>

      <div className="flex flex-wrap ">
        {getBots.map((bot, index) => (
          <div
            key={bot.bot_id}
            className="w-[300px] h-[150px] m-8 shadow-custom px-2 mt-8  bg-white rounded-xl  cursor-pointer "
            onClick={botHandler}
          >
            <div className="flex items-center mt-4">
              <p className="text-lg text-[#bf5670] font-[600] ml-2 w-[230px] capitalize " onClick={()=>navigate("/chatbot")}>
                {bot.botname} 
              </p>
              <span className="p-1 bg-gray-200 rounded-full mr-2">
                <Marksvg />
              </span>

              <div className="relative inline-block">
                <span onClick={() => toggleDropdown(index)}>
                  <Threedotsvg />
                </span>
                {openDropdownIndex === index && (
                  <div className="absolute z-10  -ml-5 mt-1 bg-gray-100 w-[150px]  rounded-lg shadow-lg">
                    <ul className="text-sm text-[#bf5670] font-[600]">
                      <li className="p-2  hover:bg-blue-100 ">
                        <a href="#">Manage</a>
                      </li>
                      <li className=" p-2  hover:bg-blue-100">
                        <a href="#">Up Date</a>
                      </li>
                      <li className="p-2 text-red-600 hover:bg-blue-100">
                        <a href="#">Delete</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex mt-14 items-center">
              <div className="w-[180px]">
                <img src={logo} alt="logo" className="h-[50px] " />
              </div>
              <div class="group relative flex justify-center ">
                <span className="bg-gray-200 flex justify-center items-center h-6 w-6 rounded-full text-xs text-[#bf5670] uppercase font-[600]">
                  {getname[0]}
                </span>
                <span class="absolute -mt-8 scale-0 rounded bg-gray-800  p-1 px-2 text-xs text-white group-hover:scale-100">
                  {getname}
                </span>
              </div>
              <p className="font-[600] text-sm ml-2 text-[#bf5670]">
                1 day ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedBots;
