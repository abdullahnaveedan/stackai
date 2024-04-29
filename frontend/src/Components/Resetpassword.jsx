import React, { useState } from "react";
import logoImg from "../assets/react.svg.png";
import validation from "./Validiation";
import { Link } from "react-router-dom";

function Login() {
  const [error, setError] = useState({});
  const [inpuValue, setInputValue] = useState({
    password: "",
    reaptpassword:""
  });

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
          Reset Password
        </h1>
        <div>
          <form onSubmit={submitHandler}>
            <input
              className="input "
              type="password"
              placeholder="New Password"
              name="password"
              onChange={onChangeHandler}
            />
            {error.password && <p className="error">{error.password}</p>}
            <input
              className="input "
              type="password"
              placeholder="Confirm Password"
              name="reaptpassword"
              onChange={onChangeHandler}
            />
            {error.reaptpassword && <p className="error">{error.reaptpassword}</p>}
            <button className="btn">Reset</button>
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

export default Login;
