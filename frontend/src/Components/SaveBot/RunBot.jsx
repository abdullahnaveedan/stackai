import React , {useState , useEffect} from  "react";

function RunBot({ setShowModal }) {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    const handleMessageSend = async (userInput) => {
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
              // Include other required fields here as needed
            }),
          }
        );
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
  
        if (!data || !data.message) {
          throw new Error("Invalid data received from the API");
        }
  
        return data.payload; // Return the chatbot's response
      } catch (error) {
        console.error("Error sending message to chatbot:", error);
        return null; // Return null or handle the error as needed
      }
    };
  
    const handleKeyDown = async (event) => {
      if (event.key === "Enter") {
        const response = await handleMessageSend(inputValue);
        setInputValue(""); // Clear input after sending
  
        if (response) {
          setMessages([
            ...messages,
            { text: inputValue, sender: "user" },
            { text: response, sender: "bot" },
          ]);
        }
      }
    };
  
    return (
      <div className="fixed top-0 left-0  w-[100vw] h-[100vh]  bg-gray-900 bg-opacity-10 z-50">
        <div className="lg:h-[500px] h-[450px] w-[400px] shadow-custom  bg-white rounded-lg bottom-0 right-0 fixed">
          <div className="text-[#EB456C] font-[600] text-lg flex justify-between items-center  border-[2px] border-[#EB456C] rounded-tl-lg rounded-tr-lg  w-full h-[50px] ">
            <h1 className="ml-2">Chat</h1>
            <span className=" cursor-pointer" onClick={() => setShowModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-dash-lg mr-4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            </span>
          </div>
          {/*.....chatBot......*/}
          <div className="lg:h-[380px] h-[330px] overflow-y-auto  bg-gray-50">
            {messages.map((message, index) => (
              <div
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={` text-sm my-1 px-4 py-2 max-w-max rounded-lg   mx-5 ${
                    message.sender === "user"
                      ? "bg-[#e68fa4] text-white"
                      : "bg-white text-[#cb8a99]  "
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mx-4 mt-4 ">
            <input
              type="text"
              placeholder="Your Messages"
              className="h-[38px] w-[320px] border-[1px] border-[#57636C] text-sm text-[#57636C] font-[400] outline-none rounded-lg pl-2  overflow-x-hidden  "
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              value={inputValue}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-send-fill border-[#57636C]"
              viewBox="0 0 16 16"
              onClick={handleMessageSend}
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  export default RunBot;