import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
  KeySvg,
  KeytokenSvg,
  LogoutSvg,
  SettingSvg,
  UserSvg,
} from "./Common/Svg";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [getBots, setGetBots] = useState([]);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  

  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
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
      console.log("user::::", data);
      const userId = data.user_id;
      setId(userId);
      console.log("User ID:", userId);
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  };

  useEffect(() => {
    fetchUserId();
    const token = localStorage.getItem("toekn")
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
 
  return (
    <div className=" w-[15%] h-[100vh] flex flex-col  items-center">
      <img
        src={logo}
        alt="logo"
        className="w-20 h-20 object-contain mt-4 mb-3"
      />

      <button className="w-[85%] h-9 bg-gradient-to-r from-[#922991] to-[#eb456c] rounded-md text-white font-normal text-sm flex items-center pl-3 gap-2 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
        </svg>
        Home 
      </button>
      
      <button className=" w-[85%] h-9  rounded-md text-[#31286a] font-normal text-sm flex items-center pl-3 gap-2 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#31286a"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
          />
        </svg>
        New Folder
      </button>
    
      <div className="w-[85%] ">
        <h1 className="text-[#31286a] font-semibold text-lg  mb-2">Recents</h1>

        {getBots.map((bot , index) => (
      
          <p className="text-[#eb456c] font-[600] text-sm my-5 hover:underline cursor-pointer capitalize" >
            {bot.botname}
          </p>
        
        ))}
      </div>

      {isOpen && (
        <div className="absolute z-10    bg-gray-50 w-[25%]  rounded-lg shadow-custom ml-44 mt-[450px]">
          <ul className="text-sm text-[#bf5670] font-[600]">
            <li className="px-4 py-2  hover:bg-blue-100 flex items-center  gap-4 ">
              <span>
                <UserSvg />
              </span>
              <a href="#">{localStorage.getItem("username")}</a>
            </li>
            <li className="px-4 py-2  hover:bg-blue-100 flex items-center  gap-4 ">
              <span>
                <KeytokenSvg />
              </span>
              <a href="#">{localStorage.getItem("token")}</a>
            </li>
            <li className="px-4 py-2  hover:bg-blue-100 flex items-center  gap-4 ">
              <span>
                <KeySvg />
              </span>
              <a href="#">API Key</a>
            </li>
            <li className=" px-4 py-2 hover:bg-blue-100 flex items-center  gap-4">
              <span>
                <SettingSvg />
              </span>
              <a href="#">Setting</a>
            </li>
            <li
              className="px-4 py-2 hover:bg-blue-100 flex items-center  gap-4"
              onClick={logoutHandler}
            >
              <span>
                <LogoutSvg />
              </span>
              <a href="#">Sign Out</a>
            </li>
          </ul>
        </div>
      )}
      <div
        className="flex  items-center  w-[90%] mt-[220px] p-2 rounded-lg cursor-pointer "
        onClick={toggleDropdown}
      >
        <div>
          <UserSvg />
        </div>
        <div>
          <span className="font-[600] text-lg text-[#bf5670] ml-4">
            {localStorage.getItem("username")}
          </span>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
