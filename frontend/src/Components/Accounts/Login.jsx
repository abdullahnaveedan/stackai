import React, { useState } from "react";
import logoImg from "../../assets/logo.png";
import validation from "../Validiation";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [error , setError] = useState({})
  const [inpuValue, setInputValue] = useState({
    username: "",
    password: "",
  });
 const navigate = useNavigate()
  // onChangeHandler....
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inpuValue, [name]: value });
  };
  
  const LoginHandler = async () => {
   setError(validation(inpuValue))
    try {
      const response = await fetch(
        'https://customgbt.pythonanywhere.com/api-token-auth/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inpuValue),
        }
      );
  
      if (!response.ok) {
       alert("unable provided credential")  
      }
   else {
    const data = await response.json();
    const {token , messsage} = data
    localStorage.setItem("token" , token)
    localStorage.setItem("username" , inpuValue.username)
    // alert("user login successful")
    navigate('/Dashboard')
  }
     
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="sm:container sm:mx-auto mx-8  ">
      <div>
        <img src={logoImg} alt="logo-image" className="m-auto h-24 mt-11" />
        <h1 className="text-center font-semibold text-[24px] text-[#eb456a] -mt-5 ">
          CustomGBT
        </h1>
      </div>
      <div>
                    
                </div>
      <div className="card">
        <h1 className="text-center md:text-[28px]  text-[22px] font-medium text-[#eb456a] pt-1">
          Login
        </h1>
        <p className="tag-line">ChatGPT style AI Trained With Your Content</p>

        <div>
          <form onSubmit={(e)=>{
          e.preventDefault();
          }}>
            <input
              className="input"
              type="text"
              placeholder="User Name"
              name="username"
              onChange={onChangeHandler}
            />
           {error.username && <p className="error">{error.username}</p>}
            <input
              className="input "
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChangeHandler}
            />
             {/* {error.password && <p className="error">{error.password}</p>} */}
        

            <Link to="/forgot-password" className="text-[#eb456a] font-medium">
              Forgot Password{" "}
            </Link>

            <button className="btn" onClick={LoginHandler}>Login</button>
          </form>
          <p className="tag-line">
            Don't have an account?
            <Link to="/SignUp">
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
