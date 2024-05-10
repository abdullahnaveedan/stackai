import React, { useState, createRef, useEffect } from "react";
import logoImg from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Otp = ({ length, onComplete }) => {
  const [inputs, setInputs] = useState(Array(length).fill(""));
  const inputRefs = Array.from({ length }, () => createRef());
  const navigate = useNavigate();
  const handleChange = (value, index) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    if (value.length > 0 && index < length - 1) {
      inputRefs[index + 1].current.focus();
    }
    if (newInputs.every((input) => input.length === 1)) {
      onComplete(newInputs.join(""));
    }
    console.log(inputs);
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && inputs[index] === "") {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  // verifyHandler...
  const verifyHandler = () => {
    let getopt = localStorage.getItem("otp");
    console.log(inputs.values)
    if (inputs.value === getopt) {
      navigate("/reset-password");
    } else {
      alert("opt does not match");
    }
  };

  return (
    <div className="sm:container sm:mx-auto mx-8 ">
      <div>
        <img src={logoImg} alt="logo-image" className="m-auto h-24 mt-20" />
        <h1 className="text-center font-semibold text-[24px] text-[#eb456a] -mt-5 ">
          CustomGBT
        </h1>
      </div>
      <div className="card">
        <h1 className="text-center md:text-[28px]  text-[22px] font-medium text-[#eb456a] pt-1">
          OTP Verification
        </h1>
        <p className="tag-line">
          We will send you OTP on your given E-Mail account.
        </p>

        <p className="tag-line">00.00</p>
        <div className="flex space-x-2 justify-center py-3">
          {inputs.map((input, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength="1"
              value={input}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="form-control w-12 h-12 text-xl text-center border border-gray-300 rounded"
            />
          ))}
        </div>

        <button className="btn " onClick={verifyHandler}>
          verify
        </button>

        <p className="tag-line">
          Don't receive the OTP?
          <button className=" text-[#eb456a] ml-2 font-bold"> RESEND</button>
        </p>
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
};

export default Otp;
