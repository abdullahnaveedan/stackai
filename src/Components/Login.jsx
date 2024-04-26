import React, { useState } from "react";
import logoImg from "../assets/react.svg.png";
import validation from "./Validiation";
import { Link } from "react-router-dom";

function Login() {
  const [error, setError] = useState({});
  const [inpuValue, setInputValue] = useState({
    email: "",
    password: "",
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
        <img src={logoImg} alt="logo-image" className="m-auto h-24 mt-11" />
        <h1 className="text-center font-semibold text-[24px] text-[#eb456a] -mt-5 ">
          CustomGBT
        </h1>
      </div>
      <div className="card">
        <h1 className="text-center md:text-[28px]  text-[22px] font-medium text-[#eb456a] pt-1">
          Login
        </h1>
        <p className="tag-line">ChatGPT style AI Trained With Your Content</p>

        <div>
          <form onSubmit={submitHandler}>
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={onChangeHandler}
            />
            {error.email && <p className="error">{error.email}</p>}
            <input
              className="input "
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChangeHandler}
            />
            {error.password && <p className="error">{error.password}</p>}

            <Link to="/forgot-password" className="text-[#eb456a] font-medium">
              Forgot Password{" "}
            </Link>

            <button className="btn">Login</button>
          </form>
          <p className="tag-line">
            Don't have an account?
            <Link to="/">
              <span className=" text-[#eb456a]"> Sign up.</span>
            </Link>
          </p>
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
