import React from "react";

import loginImg from "../assets/login.jpg";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

import { Link } from "react-router-dom";

const login = (e) => {
    e.preventDefault()
    let user=document.getElementById("username").value
    console.log(user);
    let pass=document.getElementById("password").value
    console.log(pass);

    if(user==="hassan"&pass==="1234"){
        window.location.replace("/chart")
    }
};

const Login = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-8"
          onSubmit={(e)=>login(e)}
        >
          <h2 className="text-4xl font-bold text-center py-4">CHARTS.</h2>
          <div className="flex justify-between py-8">
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
              <AiFillFacebook className="mr-2" /> Facebook
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
              <FcGoogle className="mr-2" /> Google
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input
              id="username"
              className="border relative bg-gray-100 p-2"
              placeholder='type "hassan"'
              type="text"
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              id="password"
              className="border relative bg-gray-100 p-2"
              type="password"
              placeholder='type "1234"'
            />
          </div>
          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Sign In
          </button>
          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="text-center mt-8">
            Not a member?
            <span className="text-indigo-600 ">
              {" "}Sign up now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
