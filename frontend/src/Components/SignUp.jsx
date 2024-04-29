import React, { useState } from "react";
import logoImg from "../assets/react.svg.png";
import validation from "./Validiation";
import { Link } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState({});
  const [inpuValue, setInputValue] = useState({
    name: "",
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
        <img src={logoImg} alt="logo-image" className="m-auto h-24 mt-5" />
        <h1 className="text-center font-semibold text-[24px] text-[#eb456a] -mt-5 ">
          CustomGBT
        </h1>
      </div>
      <div className="card">
        <h1 className="text-center md:text-[28px]  text-[22px] font-medium text-[#eb456a] pt-1">
          Sign Up
        </h1>
        <p className="tag-line">ChatGPT style AI Trained With Your Content</p>
        <div className=" grid sm:grid-cols-2  grid-cols-1 gap-5">
          <div className="sign-in-tag">
            <p>Sign-up With Google</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-google text-[#31295e]"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
            </svg>
          </div>
          <div className="sign-in-tag">
            <p>Sign-up With Microsoft</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-microsoft text-[#31295e]"
              viewBox="0 0 16 16"
            >
              <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-b" />
          <h1 className="mx-3  font-medium">or</h1>
          <div className="border-b" />
        </div>

        <div>
          <form onSubmit={submitHandler}>
            <input
              className="input "
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={onChangeHandler}
            />
            {error.name && <p className="error">{error.name}</p>}
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

            <button className="btn">Sign Up</button>
          </form>
          <p className="tag-line">
            Already have an account?
            <Link to="/login">
            <span className=" text-[#eb456a]"> Login</span>
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

export default SignUp;
