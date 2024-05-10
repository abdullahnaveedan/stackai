// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// function Catagory() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState({
//     id: null,
//     name: "",
//   });
//   const [selectedsubCategory, setSelectedsubCategory] = useState({
//     id: null,
//     name: "",
//   });
//   const [subcategories, setSubcategories] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [textareaValue, setTextareaValue] = useState("");
//   const [step, setStep] = useState(1); // Manage current step
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getcatagories = async () => {
//       try {
//         const response = await fetch(
//           "https://customgbt.pythonanywhere.com/api/get/allcatagory/"
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setCategories(data.payload);
//         } else {
//           console.error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     getcatagories();
//     console.log(categories);
//   }, []);
//   //handleselectedCatagory....
//   const handleselectedCatagory = async (catagoryId, catagoryName) => {
//     setSelectedCategory({ id: catagoryId, name: catagoryName });
//     try {
//       const response = await fetch(
//         `https://customgbt.pythonanywhere.com/api/fetch/subcategory/?id=${catagoryId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setSubcategories(data.payload);
//         setStep(2)
//       } else {
//         console.error("Failed to fetch subcategories");
//       }
//     } catch (error) {
//       console.error("Error fetching subcategories:", error);
//     }
//   };
//   // handlesubcategory....
//   const handlesubcategory = async (catagoryId, catagoryName) => {
//     setSelectedsubCategory({ id: catagoryId, name: catagoryName });
//     setStep(3)
//   };
//   //textareaHandler.......
//   const onChangeInputValue = (e) => {
//     setInputValue(e.target.value);
//   };
//   const onChangetextarea = (e) => {
//     setTextareaValue(e.target.value);
//   };

//   //submitHandler.........
//   const submitquestionHandler = () => {
//    setStep(4)
//   };
//   //submitHandler........
//   const submitHandler = () => {
//     const question = `As a virtual  ${selectedCategory.name} assistant, I am here to address all your ${selectedCategory.name} related queries, focusing primarily on ${selectedCategory.name} I specialize in providing ${textareaValue} accurate and concise answers to questions pertaining to ${selectedsubCategory.name} wellbeing. Let's prioritize your ${selectedCategory.name} with ${selectedsubCategory.name} ,., ${inputValue}`;
//     console.log(question);
//     localStorage.setItem("Question", question);
//     localStorage.setItem("Category", selectedCategory.name);
//     localStorage.setItem("subCategory", selectedsubCategory.name);
//     localStorage.setItem("question", textareaValue);
//     localStorage.setItem("botName", inputValue);
//     navigate("/ManageBot");
//   };
//   //backHandler......
//   const backHandler = () => {
//     setStep((prevStep) => prevStep - 1);
    
   
//   };
//   return (
//     <div>
//       <div className="h-[13vh] w-full bg-gradient-to-r from-[#DA387A] to-[#B62B85] flex  items-center">
//         <div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="30"
//             height="30"
//             fill="currentColor"
//             className={`bi bi-arrow-left-circle-fill  text-white ml-4  ${step === 1 && "hidden"}`}
//             viewBox="0 0 16 16"
//             onClick={backHandler}
//           >
//             <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
//           </svg>
//         </div>
//         <div className="flex justify-center w-full items-center ">
//           <img src={logo} alt="" className="w-24 h-24 object-contain" />
//           <h1 className="font-[600] text-xl text-white">CutomGBT</h1>
//         </div>
//       </div>
//       <div className="h-[87vh] w-full bg-white  ">
//         <h1 className=" pl-[50px] pt-14 text-[#DA387A] text-4xl font-bold text-center">
//           Create your own customized AI assistant
//         </h1>
        
//         {step === 1 && (
//           <div className="mx-8">
//             <h1 className="ml-11 text-[#DA387A] font-bold text-xl mt-4">
//               Select a category
//             </h1>
//             <div className=" flex gap-5 flex-wrap">
//               {categories.map((catagory, index) => (
//                 <>
//                   <div
//                     className="w-36 h-20 border-[2px] border-[#CF8094] rounded-xl flex gap-1 mt-2 items-center justify-center p-4 cursor-pointer text-sm"
//                     onClick={() =>
//                       handleselectedCatagory(catagory.id, catagory.name)
//                     }
//                   >
//                     <div>
//                       {" "}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         dangerouslySetInnerHTML={{
//                           __html: catagory.svg.replace(/\\/g, ""),
//                         }}
//                         className="w-[32px] h-[32px] hover:w-[34px] hover:h-[34px] mt-4 overflow-hidden "
//                       ></svg>
//                     </div>
//                     {catagory.name}
//                   </div>
//                 </>
//               ))}
//               </div>
//           </div>
//         )}
        
        
//         {step === 2 && (
//               <div className="mx-8">
//                 <h1 className="text-[#DA387A] font-bold text-xl mt-4">
//                   Select a sub category
//                 </h1>
//                 <div className="flex flex-wrap gap-5">
//                   {subcategories.map((subcatagroy) => (
//                     <>
//                       <div
//                         className="w-36 h-20 border-[2px] border-[#CF8094] rounded-xl flex items-center mt-4 justify-center p-4 cursor-pointer text-sm"
//                         onClick={() =>
//                           handlesubcategory(
//                             subcatagroy.id,
//                             subcatagroy.sub_catagory
//                           )
//                         }
//                       >
//                         {subcatagroy.sub_catagory}
//                       </div>
//                     </>
//                   ))}
//                 </div>
//               </div>
//         )}
        
//         {step === 3 && (
//           <>
//             <h1 className="ml-12 text-[#DA387A] font-semibold text-lg mt-8 text-left ">
//               Add more information about what you expect from your assistant so
//               we can tailor your <br /> it according to your needs
//             </h1>
//             <div className=" ml-4">
//               <textarea
//                 onChange={onChangetextarea}
//                 placeholder="Personalize Your Bot's Conversations"
//                 className="w-[400px] h-24 p-1 border-[2px] border-[#CF8094] rounded mx-8 mt-4 resize-none outline-none text-sm text-gray-500 font-medium"
//                 name=" question"
//               />
//             </div>
//             <div className="ml-8">
//               <button
//                 onClick={submitquestionHandler}
//                 className="mt-2 px-4 py-2 ml-4 bg-gray-300 text-gray-800 rounded hover:bg-[#BF5670] hover:text-white"
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}
       
     
//           {step === 4 && (
//             <>
//               <div className="ml-4">
//                 <input
//                   type="text"
//                   onChange={onChangeInputValue}
//                   placeholder="Display Name for AI assistant"
//                   className="w-[400px] h-11 p-1 border-[2px] border-[#CF8094] rounded mx-8 mt-8 resize-none text-sm outline-none"
//                   name="botName"
//                 />
//               </div>
//               <div className="ml-12 mt-4">
//                 <button
//                   onClick={submitHandler}
//                   className="mt-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-[#BF5670] hover:text-white"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </>
//           )}


//         </div>
//     </div>
//   );
// }

// export default Catagory;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Catagory() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    id: null,
    name: "",
  });
  const [selectedsubCategory, setSelectedsubCategory] = useState({
    id: null,
    name: "",
  });
  const [ask, setAsk] = useState("What is the purpose of this Ai Assistant?");
  const [subcategories, setSubcategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [step, setStep] = useState(1); // Manage current step
  const [count, setCount] = useState(0);
  const [conversation, setConversation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getcatagories = async () => {
      try {
        const response = await fetch(
          "https://customgbt.pythonanywhere.com/api/get/allcatagory/"
        );
        if (response.ok) {
          const data = await response.json();
          setCategories(data.payload);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getcatagories();
    console.log(categories);
  }, []);
  //handleselectedCatagory....
  const handleselectedCatagory = async (catagoryId, catagoryName) => {
    setSelectedCategory({ id: catagoryId, name: catagoryName });
    try {
      const response = await fetch(
        `https://customgbt.pythonanywhere.com/api/fetch/subcategory/?id=${catagoryId}`
      );
      if (response.ok) {
        const data = await response.json();
        setSubcategories(data.payload);
        setStep(2);
      } else {
        console.error("Failed to fetch subcategories");
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };
  // handlesubcategory....
  const handlesubcategory = async (catagoryId, catagoryName) => {
    setSelectedsubCategory({ id: catagoryId, name: catagoryName });
    setStep(3);
  };

  useEffect(() => {
    setConversation(
      `hi I am creating a bot. the catagory of my bot ${selectedCategory.name} and specialize in ${selectedsubCategory.name}. You ask the user very top question related to ${selectedCategory.name} that help me to creating the bot. question are top related. I'll share you the history. you are suppose to ask question. user answer it and according to his answer you are suppose to ask only question. Question are most relevent. Questions is only 1. no other thing in the message only you return the message.\nGPT Question: What is the purpose of this chatBot?\n`
    );
  }, [selectedCategory, selectedsubCategory]);

  //textareaHandler.......
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const onChangetextarea = (e) => {
    setTextareaValue(e.target.value);
  };

  //submitHandler.........
  const submitquestionHandler = async () => {
    // Append the user's question to the string
    let newMessage = `User Answer: ${textareaValue}\n`;
    let updatedConversation = conversation + newMessage;

    if (count < 4) {
      setStep(3);
    } else {
      setStep(4);
      console.log("Final conversation:", updatedConversation);
    }

    try {
      const response = await fetch(
        "https://customgbt.pythonanywhere.com/api/user/preference/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            historyString: updatedConversation, // Send the entire conversation to the API
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCount(count + 1);
        // Update the 'ask' state with the API response
        setAsk(data.payload);
        if (count < 4) {
          updatedConversation += `GPT Question: ${data.payload}\n`;
        }
        console.log("checkin:::::", updatedConversation);
        // Update the conversation state with the updated conversation
        setConversation(updatedConversation);
        clearTextarea();
      } else {
        console.error("Failed to fetch response from API");
      }
    } catch (error) {
      console.error("Error fetching response from API:", error);
    }
  };

  //submitHandler........
  const submitHandler = () => {
    const question = `As a virtual  ${selectedCategory.name} assistant, I am here to address all your ${selectedCategory.name} related queries, focusing primarily on ${selectedCategory.name} I specialize in providing ${textareaValue} accurate and concise answers to questions pertaining to ${selectedsubCategory.name} wellbeing. Let's prioritize your ${selectedCategory.name} with ${selectedsubCategory.name}. ${conversation}`;
    console.log(question);
    localStorage.setItem("Question", question);
    localStorage.setItem("Category", selectedCategory.name);
    localStorage.setItem("subCategory", selectedsubCategory.name);
    localStorage.setItem("question", textareaValue);
    localStorage.setItem("botName", inputValue);
    navigate("/ManageBot");
  };
  //backHandler......
  const backHandler = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const clearTextarea = () => {
    setTextareaValue("");
  };

  return (
    <div>
      <div className="h-[13vh] w-full bg-[#F3E8F3] flex items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#EB456A"
            className={`bi bi-arrow-left-circle-fill ml-4 cursor-pointer  ${
              step === 1 && "hidden"
            }`}
            viewBox="0 0 16 16"
            onClick={backHandler}
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </div>
        <div className="flex justify-center w-full items-center ">
          <img src={logo} alt="" className="w-24 h-24 object-contain" />
          <h1 className="font-[700] text-2xl text-[#EB456A]">CutomGBT</h1>
        </div>
      </div>
      <div className="h-[87vh] w-full bg-white  ">
        <h1 className=" pl-[50px] pt-[12vh] text-[#DA387A] text-5xl font-bold text-center">
          Create your own customized AI assistant
        </h1>

        {step === 1 && (
          <div className="mx-8">
            <h1 className="ml-11 text-[#DA387A] font-semibold text-[27px] mt-[13vh]">
              Select a Category
            </h1>
            <div className=" flex gap-5 flex-wrap ml-11">
              {categories.map((catagory, index) => (
                <>
                  <div
                  key={index}
                    className="w-48 h-20 border-[2px] border-[#CF8094] rounded-xl flex items-center gap-3  py-4 cursor-pointer font-semibold mt-6 text-lg text-[#DA387A]"
                    onClick={() =>
                      handleselectedCatagory(catagory.id, catagory.name)
                    }
                  >
                    <div className=" w-[40px] h-[40px]  border-[2px] p-2 border-[#CF8094] rounded-full flex items-center justify-center ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        dangerouslySetInnerHTML={{
                          __html: catagory.svg.replace(/\\/g, ""),
                        }}
                        className=" w-[30px] h-[30px] flex self-center justify-self"
                      ></svg>
                    </div>
                    {catagory.name}
                  </div>
                </>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mx-8 ml-11 mt-[13vh]">
            <h1 className="ml-11 text-[#DA387A] font-semibold text-[27px]">
              Select a Sub-Category
            </h1>
            <div className=" flex gap-5 flex-wrap ml-11">
              {subcategories.map((subcatagroy,index) => (
                <>
                  <div
                  key={index}
                  className="w-48 h-20 border-[2px] border-[#CF8094] rounded-xl flex text-center items-center justify-center py-4 cursor-pointer font-semibold mt-6 text-xl text-[#DA387A]"
                    onClick={() =>
                      handlesubcategory(
                        subcatagroy.id,
                        subcatagroy.sub_catagory
                      )
                    }
                  >
                    {subcatagroy.sub_catagory}
                  </div>
                </>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <>
            <div className="w-full h-[70%] flex items-center">
              <div className="h-[290px] w-[70%] bg-[#F3E8F3]  mx-auto rounded-lg flex flex-col justify-center">
                <p className="text-[#EB456A] font-[600] text-[23px] ml-14 pt-5 text-justify">
                  {ask}
                </p>
                <div className="h-[130px] w-[90%] bg-white m-auto my-auto rounded-lg">
                  <textarea
                  value={textareaValue} 
                    onChange={onChangetextarea}
                    placeholder="Personalize Your Assistant"
                    className=" w-full h-full  outline-none m-auto font-medium text-[#DA387A] resize-none pl-2 pt-1 rounded-lg "
                    name=" question"
                    maxLength={200}
                  />
                </div>
                <div className="flex justify-end mr-5 my-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#EB456A"
                    className="bi bi-arrow-right-circle-fill cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={submitquestionHandler}
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="w-full h-full">
              <div className="h-[200px] w-[80%] bg-[#dd407f]  m-auto mt-16 rounded-lg">
                <p className="text-white font-[600] text-[24px] ml-11 pt-5">
                  Bot Name
                </p>
                <div className="h-[60px] w-[90%] m-auto mt-2">
                  <input
                    type="text"
                    onChange={onChangeInputValue}
                    placeholder="Display Name for AI assistant"
                    className="w-full h-full bg-white outline-none text-[#DA387A] resize-none pl-2 "
                    name="botName"
                  />
                </div>
                <div className="  flex justify-end mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle-fill text-white my-2"
                    viewBox="0 0 16 16"
                    onClick={submitHandler}
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Catagory;