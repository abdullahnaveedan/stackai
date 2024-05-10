const FormGeneral = () => {
  const cards = [
    {
      heading: "Input node label",
      heading1: "New name (optional)",
      heading2: "Required field",
    },
    {
      heading: "Input node label",
      heading1: "New name (optional)",
      heading2: "Required field",
    },
  ];
  return (
    <div className="h-[75vh] w-[100%] bg-white flex flex-col items-center  overflow-auto">
      <div className="w-[95%] h-auto shadow-custom  rounded-xl mt-11 py-4">
        <div className="flex h-20 border-b-[3px] border-gray-400 pl-11 py-5 items-center mb-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-gear-fill text-[#EB456A] mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </div>
          <div className="ml-2">
            <h4 className="text-[#EB456A] font-semibold">Description</h4>
            <p className="text-[#57636C] text-sm">
              Basic information of your application
            </p>
          </div>
        </div>
        <div className="mx-11">
          <h4 className="text-[#EB456A] font-semibold">Interface name</h4>
          <p className="text-[#57636C] text-sm">
            Give a name to your interface
          </p>
          <div className="w-[95%]  h-[10%] border-[#57636C] border-[1px] p-2 rounded-xl my-2">
            <input
              type="text"
              className=" outline-none h-full w-full text-sm font-normal text-[#bf5670]"
              placeholder="Simple Chatbot"
            />
          </div>
          <h4 className="text-[#EB456A] font-semibold mt-4">Description</h4>
          <p className="text-[#57636C] text-sm">
            Describe briefly your AI application
          </p>
          <div className="w-[95%]  h-[15%] border-[#57636C]  border-[1px] p-2 rounded-xl my-2">
            <textarea
              type="text"
              className=" outline-none h-full w-full resize-none text-sm font-normal text-[#bf5670]"
              placeholder="This application is meant to reduce of calls to the customer support by answering the most common questions"
            />
          </div>
          <div className="flex gap-4 mt-5">
            <div>
              <p className="text-[#57636C] text-sm">Password for sharing (Optional)</p>
            </div>
            <div className="w-[100px] flex items-center justify-end">
              <label className="flex">
                <input
                  type="checkbox"
                  className="absolute left-1/2 -translate-x-1/2 w- hidden h-full peer appearance-none rounded-md text-[#57636C] text-sm font-normal "
                />
                <span className="w-10 h-6 flex items-center flex-shrink-0 ml-4 mx-2 rounded-full duration-300 ease-in-ou bg-gray-300 peer-checked:bg-[#BF5670] after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 "></span>
              </label>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-[95%] min-h-[300px] shadow-custom  rounded-xl mt-8 py-4 mb-11">
        <div className="flex h-20 border-b-[3px] border-gray-400 pl-11 py-5 items-center mb-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-link-45deg text-[#EB456A]"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>
          </div>
          <div className="ml-2">
            <h4 className="text-[#EB456A] font-semibold">Inputs and Outputs</h4>
            <p className="text-[#57636C] text-sm">
              Select the inputs and outputs of your application
            </p>
          </div>
        </div>
        <div className="flex  gap-2 justify-center">
          {cards.map((data) => (
            <>
              <div className="w-[45%] h-auto shadow-custom  rounded-xl  py-4 mt-8 ">
                <div className="flex justify-evenly  mb-2 text-[#EB456A] font-semibold lg:text-sm text-xs">
                  <span className="">{data.heading}</span>
                  <span className="">{data.heading1}</span>
                  <span className="">{data.heading2}</span>
                </div>
                <div className="border-b-[3px] border-gray-400"></div>
                <div className="flex justify-between items-center mx-5 mt-5">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-5 w-5" />
                    <span className="ml-5 text-[#57636C]"> in-0i</span>
                  </div>
                  <div className=" h-8 w-28 border-[2px] rounded-sm   border-[#CCCCCC] -ml-[3vw]">
                    <input
                      type="text"
                      placeholder="in-0i"
                      className="h-full w-full outline-none px-2 text-[#bf5670] placeholder:text-[#bf5670] text-sm"
                    />
                  </div>
                  <div>
                    <input type="checkbox" className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FormGeneral;
