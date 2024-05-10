import hiddenIconimg from "../assets/hidden.png";

const WAexport = () => {
  return (
    <div className="h-[83%] w-[100%]  flex items-center justify-center py-2 overflow-y-auto">
      <div className="w-[95%] h-[85%] bg-white shadow-custom rounded-lg overflow-hidden mt-6">
        <div className="flex h-20 border-b-2 border-b-gray-400 pl-11 py-5 items-center mb-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#EB456A"
              className="bi bi-gear-fill mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </div>
          <div className="pl-2">
            <h4 className="text-[#EB456A] text-md font-semibold">
              Twilio configuration
            </h4>
            <p className="text-[#57636C] text-sm">
              Connect your chatbot to WhatsApp/SMS using Twilio
            </p>
          </div>
        </div>
        <div className="px-11">
          <h4 className="text-[#EB456A] font-semibold text-md">Twilio Account SID</h4>
          <p className="text-[#57636C] text-sm">
            For instructios on how to get the SID number or how to create one
            click
          </p>
          <div className="my-2 flex items-center">
            <div className="w-[95%]  h-[37px] border-[#57636C]  border-[1px] px-2 rounded-xl text-sm">
              <input
                type="text"
                placeholder="Account***************"
                className=" outline-none h-full w-full text-[#bf5670]"
              />
            </div>
            <div className="bg-[#EB456A]  p-1 rounded-full ml-5">
              <img
                src={hiddenIconimg}
                alt="hidden-imgicon"
                className=" object-contain h-5 w-5"
              />
            </div>
          </div>
        </div>
        <div className="px-11">
          <h4 className="text-[#EB456A] font-semibold text-md">Twilio Account SID</h4>
          <p className="text-[#57636C] text-sm">
            For instructios on how to get the SID number or how to create one
            click
          </p>
          <div className="my-2 flex items-center">
            <div className="w-[95%]  h-[37px] border-[#57636C]  border-[1px] p-2 rounded-xl">
              <input
                type="text"
                placeholder="Account***************"
                className=" outline-none h-full w-full text-sm text-[#bf5670]"
              />
            </div>
            <div className="bg-[#EB456A]  p-1 rounded-full ml-5">
              <img
                src={hiddenIconimg}
                alt="hidden-imgicon"
                className=" object-contain h-5 w-5"
              />
            </div>
          </div>
        </div>
        <div className="px-11">
          <h4 className="text-[#EB456A] font-semibold text-md">Twilio Account SID</h4>
          <p className="text-[#57636C] text-sm">
            For instructios on how to get the SID number or how to create one
            click{" "}
          </p>
          <div className="my-2 flex items-center">
            <div className="w-[95%]  h-[37px] border-[#57636C]  border-[1px] p-2 rounded-xl">
              <input
                type="text"
                placeholder="Account***************"
                className=" outline-none h-full w-full text-sm text-[#bf5670]"
              />
            </div>
            <div className="bg-[#EB456A]  p-1 rounded-full ml-5">
              <img
                src={hiddenIconimg}
                alt="hidden-imgicon"
                className=" object-contain h-5 w-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WAexport;
