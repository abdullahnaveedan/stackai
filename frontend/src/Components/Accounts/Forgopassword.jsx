import { useEffect, useState ,useRef } from "react";
import logoImg from "../../assets/logo.png";
import validation from "../Validiation";
import { Link, useNavigate } from "react-router-dom";

function Forgotpassword() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState({});
  const [inpuValue, setInputValue] = useState({
    email: "",
  });
  const form = useRef();
  const navigate = useNavigate();
  // onChangeHandler....
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inpuValue, [name]: value });
    console.log(inpuValue);
  };
  // submitHandler.....
  const submitHandler = (event) => {
    event.preventDefault();
    setError(validation(inpuValue));
  };
  // generateOTP.....\

  const generateOTP = () => {
    const digits = "0123456789";
    let otpValue = "";
    for (let i = 0; i < 6; i++) {
      otpValue += digits[Math.floor(Math.random() * 10)];
    }
    setOtp(otpValue);
    localStorage.setItem("otp" , otpValue)
    console.log("OTP",otp);
    if(otp != ""){
      navigate("/otp")
    }
  };
  useEffect(() => {
    generateOTP();
  }, []);

  return (
    <div className="sm:container sm:mx-auto mx-8  ">
      <div>
        <img src={logoImg} alt="logo-image" className="m-auto h-24 mt-28" />
        <h1 className="text-center font-semibold text-[24px] text-[#eb456a] -mt-5 ">
          CustomGBT
        </h1>
      </div>
      <div className="card">
        <h1 className="text-center md:text-[28px]  text-[22px] font-medium text-[#eb456a] pt-1">
          Forgot Password
        </h1>
        <p className="tag-line">
          Enter your email and we will send you 6-Digit code to reset Password
        </p>

        <div>
          <form onSubmit={submitHandler} ref={form}>
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={onChangeHandler}
            />
            {error.email && <p className="error">{error.email}</p>}

            <button
              className="btn"
              disabled={inpuValue.email === ""}
              onClick={generateOTP}
            >
              Send
            </button>

            <div className="flex items-center justify-center py-2 tag-line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
              <Link to="/login">Back to login</Link>
            </div>
          </form>
        </div>
      </div>
      <p className="tag-line2 my-2">
        By signing in, you agree to our &nbsp;
        <span className=" text-[#eb456a]">
          Terms of Service <span className="text-black">and </span>Privacy
          Policy.
        </span>
      </p>
    </div>
  );
}

export default Forgotpassword;
