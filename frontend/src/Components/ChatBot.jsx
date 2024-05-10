import React, { useState, useEffect, useRef } from "react";
import { Chatspinner } from "./Spinner";
import logo from "../assets/logo.png";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(0);
  const [loader, setLoader] = useState(false);
  const [getBotName, setGetBotName] = useState("");
  const [getTime, setGetTime] = useState("");

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const botName = localStorage.getItem("botName");
    console.log(".........", botName);
    setGetBotName(botName);
  }, []);

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      const userMessage = { text: inputValue, sender: "user" };
      setMessages([...messages, userMessage]);
      setInputValue(""); // Clear input after sending
      const question = localStorage.getItem("Question");
      try {
        const response = await fetch(
          "https://customgbt.pythonanywhere.com/api/bot/quick/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              gptPrompt: question,
              question: inputValue,
              
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        if (!data || !data.message) {
          throw new Error("Invalid data received from the API");
        }
        scrollToBottom ()
        setLoader(true);
        // Wait for 2 seconds before showing bot's message
        setTimeout(() => {
          const botMessage = { text: data.payload, sender: "bot" };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
          setLoader(false);

        }, 2000);
      } catch (error) {
        console.error("Error sending message to chatbot:", error);
      }
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };
  // sidebar Button ..........
  const sidebarbutton = [
    "+ New Chat",
    "Previous chats",
    "Chat1",
    "Chat2",
    "Chat3",
  ];
  //handlesidebarButton ......
  const handlesidebarButton = (index) => {
    setActive(index);
  };
 
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };
  return (
    <div className="h-[100vh] w-[100%] bg-slate-300 flex justify-end ">
      <div className="w-[17%] ">
        <h1 className="text-2xl font-[700] text-[#BF5670] mt-11 text-center my-5">
          Simple interface
        </h1>
        {sidebarbutton.map((button, index) => (
          <p
            className={`mx-5 p-2 rounded-lg my-1 text-[#31286A] text-sm cursor-pointer ${
              active === index
                ? "bg-gradient-to-r from-[#922991] to-[#eb456c] text-white"
                : ""
            }`}
            onClick={() => handlesidebarButton(index)}
            key={index}
          >
            {button}
          </p>
        ))}
      </div>
      <div className="h-[87vh] w-[83%] bg-white mt-16 rounded-[10px] flex flex-col justify-center items-center mr-2">
        <div
          className="w-[80%] h-[75vh]  overflow-y-auto"
          ref={messagesContainerRef}
        >
          {messages == "" ? (
            <div className="flex flex-col justify-center items-center h-full">
              <img src={logo} alt="logo-image" className="h-[100px]" />
              <p className="text-[#a8455e] font-[600] text-[24px]  mx-2 ">
                How can I help you today?
              </p>
            </div>
          ) : (
            ""
          )}
          {/* //<Chatspinner/> */}
          {messages.map((message, index) => (
            <div className="my-8">
              <div>
                {message.sender === "user" ? (
                  <div className="flex items-center ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-circle text-[#a8455e]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                    <p className="  text-sm mx-2 text-[#a8455e] font-[600]">
                      You
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <img src={logo} alt="logo-img" className="h-[40px]" />
                    <p className="mx-1 text-sm text-[#a8455e] font-[600]">
                      {getBotName}
                    </p>
                    
                  </div>
                  
                )}
              </div>
              <div
                className={` text-sm my-1 px-5 py-2 max-w-max rounded-lg flex justify-end mx-5 ${
                  message.sender === "user"
                    ? "bg-[#a8455e]  text-white"
                    : "  shadow-custom text-[#a8455e] flex  "
                }`}
              >
                
                {message.text}
              </div>
              <div className="ml-5">
              {loader && index === messages.length - 1 && <Chatspinner />}
              </div>
            </div>
          ))}
        </div>
        <div className="h-[20%] w-full flex justify-center items-center">
          <div className="h-[50px]  w-[75%] border-[1px] border-[#BF5670]   rounded-lg pl-2  flex justify-center items-center">
            <input
              type="text"
              placeholder={`Message ${getBotName}`}
              className=" h-full w-full outline-none rounded-full pl-2"
              onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
              value={inputValue}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-send-fill text-[#BF5670] mr-4 cursor-pointer "
              viewBox="0 0 16 16"
              onClick={handleSendMessage}
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
