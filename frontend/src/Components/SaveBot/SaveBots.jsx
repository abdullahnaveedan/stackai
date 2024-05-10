import React , {useState , useEffect} from  "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../Spinner";
import RunBot from "./RunBot";


function SaveBots({ showModal, setShowModal, active, setActive }) {
    const [loading, setLoading] = useState(false);
    const [showChatBot, setShowChatBot] = useState(false);
    const [id , setId] =  useState(null)
    const navigate = useNavigate();
    //saveHandler....
    const fetchUserId = async () => {
      const userName = localStorage.getItem("username");
      const url = "https://customgbt.pythonanywhere.com/api/fetch/id/";
    
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username: userName })
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch user ID");
        }
    
        const data = await response.json();
        const userId = data.user_id; // Assuming the API response contains an "id" field
        setId(userId)
        console.log("User ID:", userId);
    
        // Now you can use the userId in your application logic
      } catch (error) {
        console.error("Error fetching user ID:", error);
        // Handle the error, show a message, or perform any other necessary actions
      }
    };
    
    useEffect(() => {
      fetchUserId();
    }, []);
    
    const saveHandler = async () => {
      const getQuestion = localStorage.getItem("Question");
      const botName = localStorage.getItem("botName");
      try {
        setLoading(true);
        const response = await fetch(
          "https://customgbt.pythonanywhere.com/api/save/botRecords/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: id,
              botname: botName,
              system_prompt: getQuestion,
            }),
          }
        );
    
        setLoading(false);
    
        if (!response.ok) {
          throw new Error("Save bot response was not ok");
        }
    
        const data = await response.json();
        console.log(data);
        console.log("whereee");
    
        navigate("/Dashboard");
      } catch (error) {
        console.error("Error saving bot records:", error);
        // Handle the error, show a message, or perform any other necessary actions
      }
    };
    
    //testHandler....
    const testHandler = () => {
      setShowChatBot(true);
      setActive(index == 1);
    };
  
    return (
      <>
        {!showChatBot ? (
          <div className="fixed top-0 left-0  w-[100vw] h-[100vh] flex  justify-center items-center bg-gray-900 bg-opacity-10 z-50">
            <div className="h-[230px] lg:w-[30%] w-[50%] shadow-custom  bg-white rounded-lg  transform transition-all duration-300">
              <div className="text-[#EB456C] font-[600] text-[24px] flex justify-end mr-4 ">
                <span
                  className=" cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
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
                <h1 className="text-[#BF5670] font-[600] text-lg">Warning</h1>
                <p className="text-[#57636C] font-[400] text-sm my-2">
                  Please ensure you run the process before saving. Click 'Run' to
                  proceed and then 'Save' to confirm your changes.
                </p>
              </div>
              <div className="flex justify-evenly mt-8">
                <button
                  className="font-[600] bg-[#BF5670] rounded-[5px] flex justify-center items-center   h-[40px] w-[100px] text-white text-sm"
                  onClick={saveHandler}
                >
                  {loading && (
                    <div className="-ml-5">
                      <Spinner />
                    </div>
                  )}{" "}
                  &nbsp; Save
                </button>
                <button
                  className="font-[600] bg-[#BF5670] rounded-[5px] h-[40px] w-[100px] text-white text-sm"
                  onClick={testHandler}
                >
                  Test
                </button>
              </div>
            </div>
          </div>
        ) : (
          <RunBot setShowModal={setShowModal} />
        )}
      </>
    );
  }

  export default SaveBots ;