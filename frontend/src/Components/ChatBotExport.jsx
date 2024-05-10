const ChatBotExport = () => {
  return (
    <div className="w-[100%] min-h-[600px] flex flex-col items-center justify-center py-2 overflow-y-auto mb-16">
      <div className="w-[95%] bg-white shadow-custom rounded-lg py-4 ">
        <div className=" w-[100%] flex items-center px-4 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#bf5670"
            className="bi bi-chat-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          </svg>
          <div className="ml-4">
            <h1 className="text-[#bf5670] font-semibold tex-sm">
              Shareable chatbot
            </h1>
            <p className="text-[#57636C] font-normal text-[13px] -translate-y-1">
              Share your chatbot through dedicated URL
            </p>
          </div>
        </div>

        <div className="w-[100%] border-[#919191] border-b-2 mb-4"></div>

        <p className="text-[#57636C] font-normal text-sm px-4">
          Use this URL to share your chatbot with others. Remember to setup a
          password if needed inthe general tab
        </p>
        <button className="bg-[#bf5670] text-base font-semibold text-white rounded-lg p-2 mx-4 mt-2">
          Open ChatBot
        </button>
      </div>

      <div className="w-[95%] bg-white shadow-custom rounded-lg overflow-hidden mt-6 py-4 mb-8">
        <div className=" w-[100%] flex items-center px-4 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#bf5670"
            className="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
          </svg>
          <div className="ml-4">
            <h1 className="text-[#bf5670] font-semibold tex-sm">
              Embed in website
            </h1>
            <p className="text-[#57636C] font-normal text-[13px] -translate-y-1">
              Add the chatbot code snippet into your website
            </p>
          </div>
        </div>

        <div className="w-[100%] border-[#919191] border-b-2 mb-4"></div>

        <div className="ml-4">

          <div className="flex">
          <div className="w-[75%]">
            <h1 className="text-[#bf5670] font-semibold tex-[13px]">
              Embed code for website
            </h1>
            <p className="text-[#57636C] font-normal text-[13px] -translate-y-1">
              Use this code snippet to deploy the chatbot in your application
            </p>
          </div>

          <div className="w-[23%] flex items-center justify-end">
            <label className="flex text-[#57636C] text-sm font-normal">
              HTML
              <input
                type="checkbox"
                className="absolute  -translate-x-[18px] hidden h-full peer appearance-none rounded-md"
              />
              <span className="w-10 h-6 flex items-center flex-shrink-0 ml-4 mx-2 rounded-full duration-300 ease-in-out bg-[#bf5670] after:w-5 after:h-5 after:bg-white after:rounded-full after:ml-[0.3px] after:shadow-md after:duration-300 peer-checked:after:translate-x-[18px] "></span>
              React
            </label>
          </div>
          </div>


          <div className="w-[98%] h-[115px] border-[1px] border-[#57636C] rounded-lg  mt-3"></div>
          <p className="text-[#57636C] text-sm font-normal my-2">Use this code for embedding into wix,  Squarespace, Framer, Webflow, Wordpress and platforms.</p>

        </div>
      </div>
    </div>
  );
};
export default ChatBotExport;
