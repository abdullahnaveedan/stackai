import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
    const navigate=useNavigate()
  return (
    <>
      <div className="w-full h-full flex bg-gray-100 items-center justify-center">
      <div className=" w-[15%] h-[100vh] flex flex-col  items-center">
    <img
      src={logo}
      alt="logo"
      className="w-20 h-20 object-contain mt-4 mb-3"
    />

    <button className="w-[80%] h-9 bg-gradient-to-r from-[#922991] to-[#eb456c] rounded-md text-white font-normal text-sm flex items-center pl-3 gap-2 mb-2">
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

  </div>

        <div className=" w-[83%] h-[90vh] bg-white rounded-3xl overflow-hidden">
          <div className="w-[100%] h-[18%] bg-gradient-to-r to-[#922991] from-[#eb456c] flex items-center justify-end pr-10">
            <div
              className="w-[11vw] h-[6vh] bg-[#eb456a] border-white border-[3.5px] rounded-md cursor-pointer text-white flex xl:text-base sm:text-sm items-center sm:gap-1 xl:gap-4 px-2"
            onClick={()=>navigate("/DeploymentTab")}
            >Publish</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;