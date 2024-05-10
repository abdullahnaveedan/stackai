import React,{ useState } from "react";
import SideButton from "./SideButton";
// import SideBtn4 from "./SideBtn4";
import WhatsAppExport from "./WhatsAppExport";
import ChatBotExport from "./ChatBotExport";
import FormExport from "./FormExport";
import ChatInterfaceExport from "./ChatInterfaceExport";
import ApiEndPointsExport from "./ApiEndPointsExport";
import FormGeneral from "./FormGeneral";
import Styling from "./Styling";
import Logs from "./Logs";

const DeploymentTab = () => {
  const [activeBtn4Index, setActiveBtn4Index] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const buttons = [
    {
      text: "Website ChatBot",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#bf5670"
          className="bi bi-chat-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
        </svg>
      ),
    },
    {
      text: "Form",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-file-text-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1" />
        </svg>
      ),
    },
    {
      text: "Chat Interface",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#bf5670"
          className="bi bi-file-earmark-fill"
          viewBox="0 0 16 16"
        >
          <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
        </svg>
      ),
    },
    {
      text: "WhatsApp / SMS",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-phone"
          viewBox="0 0 16 16"
        >
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
      ),
    },
    {
      text: "API end-point",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-code"
          viewBox="0 0 16 16"
        >
          <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
        </svg>
      ),
    },
  ];

  const btn4 = [
    {
      text: "Build",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#31286A"
          className="bi bi-box"
          viewBox="0 0 16 16"
        >
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
        </svg>
      ),
    },
    {
      text: "Export",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#31286A"
          className="bi bi-rocket-takeoff"
          viewBox="0 0 16 16"
        >
          <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
          <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
          <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
        </svg>
      ),
    },
    {
      text: "Logs",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#31286A"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      ),
    },
    {
      text: "Manage",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#31286A"
          className="bi bi-chat-square-text-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
        </svg>
      ),
    },
  ];

  const navbuttons = ["Export Options", "General", "Styling", "Manager"];
  const [activeNavBtn, setActiveNavBtn] = useState(navbuttons[0]);

  const handleNavBtn = (buttonName) => {
    setActiveNavBtn(buttonName);
  };

  // const handleButtonClick = (index) => {
  //   setActiveButtonIndex(index);
  // };

  const handleButtonClick = (index) => {
    if (index >= buttons.length) {
      setActiveBtn4Index(index - buttons.length); // Update active btn4 index
    } else {
      setActiveButtonIndex(index);
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex bg-gray-100 items-center justify-center">
        <div className="w-[17%] min-h-[100%] bg-gray-100 flex flex-col items-center px-1 overflow-y-auto pb-4">
          <div className="w-[85%]">
            <h1 className=" font-bold text-[#bf5670] md:text-xl xl:text-2xl mt-8 mb-9 ">
              Simple ChatBot
            </h1>
          </div>
          <div className="w-[100%] h-[100%] flex justify-between">
            <div className="w-[15%] ml-2 flex flex-col items-cente">
            {btn4.map((button, index) => (
            <Btn4Button
              key={index}
              text={button.text}
              svg={button.svg}
              isActive={index === activeBtn4Index}
              onClick={() => handleButtonClick(index + buttons.length)}
            />
          ))}
            </div>
            <div className="h-[75vh] border-r bordere-[1px] border-gray-300"></div>
            <div className="w-[70%] flex flex-col items-center">
              {buttons.map((button, index) => (
                <SideButton
                  key={index}
                  text={button.text}
                  svg={button.svg}
                  isActive={index === activeButtonIndex}
                  onClick={() => handleButtonClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className=" w-[84%] h-[95vh] bg-white rounded-3xl mx-2 overflow-hidden mt-[4vh]">
          <div className="w-[100%] h-[18%] bg-gradient-to-r to-[#922991] from-[#eb456c] flex items-center pr-10">
            <div className="w-[40%] h-[6vh] rounded-md text-white font-semibold flex items-center sm:gap-1 md:gap-6 xl:gap-8 px-2 ml-4">
              {navbuttons.map((buttonText, index) => (
                <button
                  key={index}
                  className={`${
                    activeNavBtn === buttonText
                      ? "bg-white text-[#eb456c] rounded-md"
                      : null
                  } p-2 text-sm`}
                  onClick={() => handleNavBtn(buttonText)}
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>

          <div className="w-[100%] h-[100%] overflow-y-auto">
            {activeButtonIndex === 0 && activeNavBtn === "Export Options" && (
              <ChatBotExport />
            )}
            {activeButtonIndex === 1 && activeNavBtn === "Export Options" && (
              <FormExport />
            )}
            {activeButtonIndex === 2 && activeNavBtn === "Export Options" && (
              <ChatInterfaceExport />
            )}
            {activeButtonIndex === 3 && activeNavBtn === "Export Options" && (
              <WhatsAppExport />
            )}
            {activeButtonIndex === 4 && activeNavBtn === "Export Options" && (
              <ApiEndPointsExport />
            )}
            {activeNavBtn === "General" && <FormGeneral />}
            {activeNavBtn === "Styling" && <Styling />}
            {activeNavBtn === "Manager" && <Logs />}
          </div>
        </div>
      </div>
    </>
  );
};

const Btn4Button = ({ text, svg, isActive, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center mt-3 mb-1 cursor-pointer text-[11px] ${
        isActive ? "text-[#bf5670]" : "text-[#31286A]"
      }`}
      onClick={onClick}
    >
      {React.cloneElement(svg, { fill: isActive ? "#bf5670" : "#31286A" })}
      <span>{text}</span>
    </div>
  );
};

export default DeploymentTab;

