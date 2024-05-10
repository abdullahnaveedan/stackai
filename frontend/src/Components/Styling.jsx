const Styling = () => {
  const toggleEnable = [
    {
      heading: " Enable stop generating",
    },
    {
      heading: "Enable clear chat",
    },
    {
      heading: " Enable stop generating",
    },
  ];
  return (
    <div className="h-[75vh] w-[100%] bg-white flex flex-col items-center  overflow-auto">
      <div className="w-[95%] h-auto shadow-custom  rounded-xl mt-11 mb-11">
      <div className="flex h-20 border-b-[3px] border-gray-400 pl-11 py-5 items-center ">
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
        <div className="pl-2">
          <h4 className="text-[#EB456A] font-semibold">Styling</h4>
          <p className="text-[#57636C] text-sm">
            Select the style of your chat interface
          </p>
        </div>
      </div>
      <div className="mx-11 my-4">
        <h4 className="text-[#EB456A] font-semibold">Icon URL</h4>
           <div className="w-[95%]  h-[40px] border-[#57636C]  border-[1px]  rounded-xl my-2">
            <input type="text" className=" outline-none h-full w-full text-[#57636C] font-[400] text-xs  rounded-xl" />
           </div>
           <h4 className="text-[#EB456A] font-semibold">Welcome message</h4>
           <div className="w-[95%]  h-[40px] border-[#57636C]  border-[1px] p-2 rounded-xl my-2">
             <input
              type="text"
              className=" outline-none h-full w-full  text-[#57636C] font-[400] text-sm  rounded-xl"
              placeholder="Hello!I am here to assist you!"
            />
          </div>
          <h4 className="text-[#EB456A] font-semibold">Error message</h4>
          <div className="w-[95%]  h-[40px] border-[#57636C]  border-[1px] p-2 rounded-xl my-2 ">
            <input
              type="text"
              className=" outline-none h-full w-full text-[#57636C] font-[400] text-sm  rounded-xl"
              placeholder="Unfortunately the server just had an error. Try again later or send us an email to example@company.com"
            />
          </div>
          <h4 className="text-[#EB456A] font-semibold">Color</h4>
          <div className="w-[30%]  h-[40px] border-[#57636C]  border-[1px] p-2 rounded-xl my-2 mb-5">
            <select className=" h-full w-full outline-none text-[#57636C] font-[400] text-sm  rounded-xl">
              <option className="">Blue</option>
            </select>
          </div>
          <div className=" w-72 ">
             {toggleEnable.map((enable) => (
              <div className="flex justify-between">
                <h4 className="text-[#EB456A] font-semibold">
                  {enable.heading}
                </h4>
                <div className="my-1">
                  <label className="flex ">
                    <input
                      type="checkbox"
                      className="absolute -translate-x-[18px] w- hidden h-full peer appearance-none rounded-md text-[#57636C] text-sm font-normal "
                    />
                    <span className="w-10 h-6 flex items-center flex-shrink-0 ml-4 mx-2 rounded-full duration-300 ease-in-out peer-checked:bg-[#BF5670] bg-gray-300 after:w-5 after:h-5 after:bg-white after:rounded-full after:ml-[1px] after:shadow-md after:duration-300 peer-checked:after:translate-x-[18px] "></span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
   </div>
  );
};
export default Styling;
