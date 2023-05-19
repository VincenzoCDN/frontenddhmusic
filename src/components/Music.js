import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo3 from "../assets/logo3.png";
import SignUpModal from "./SignUpModal";

const App = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  /*   const [isRegistered, setIsRegistered] = useState(false); */

  const navigate = useNavigate();

  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleLogin(event) {
    event.preventDefault();
    let myStatus = "";

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // your expected POST request payload goes here
        email,
        password,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        myStatus = data;
        localStorage.setItem("My Token", data);
      })
      .then((data) => {
        let myData = localStorage.getItem("My Token");

        if (
          myData !== "User not found" &&
          myData !== "Bad input" &&
          myData !== "Invalid password"
        ) {
          alert("User logged in successfully");
          navigate("/music1");
        } else {
          alert(myStatus);
        }
      })
      .catch((error) => alert(error));
  }

  return (
    <div className="h-screen w-screen bg-red-800">
      <nav className="flex justify-between items-center border-b-2 border-white bg-blue-900 mainContainer">
        <img src={logo3} alt="logo 3" className="px-2 py-1 w-48" />
        <div className="flex justify-end items-center pr-2">
          <form
            className="flex justify-center items-center gap-2 py-1 pr-0"
            onSubmit={handleLogin}
          >
            <input
              type="text"
              value={email}
              onChange={handleemailChange}
              placeholder="E-mail"
              className="border-2 border-blue-500 px-3 py-0 bg-slate-300"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="border-2 border-blue-500 px-3 py-0 bg-slate-300"
            />
            <button
              type="submit"
              className="border-2 border-blue-500 m-0 px-3 py-0 bg-slate-300"
            >
              Login
            </button>
          </form>
          <SignUpModal />
        </div>
      </nav>
      <div className="secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex justify-center items-center gap-5">
        <div className="w-1/4 h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center h-2/3 w-full border-violet-900 border-2">
            <div className="h-2/3 w-full border-b-white border-b bgMain1"></div>
            <div className="flex justify-center items-center h-1/3 w-full">
              <div className="w-1/3 bgMainA1 h-full"></div>
              <div className="w-1/3 bgMainA2 h-full border-8 border-yellow-100"></div>
              <div className="w-1/3 bgMainA3 h-full"></div>
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center h-2/3 w-full border-violet-900 border-2">
            <div className="h-2/3 w-full border-b-white border-b bgMain2"></div>
            <div className="flex justify-center items-center h-1/3 w-full">
              <div className="w-1/3 bgMainB1 h-full"></div>
              <div className="w-1/3 bgMainB2 h-full border-8 border-violet-300"></div>
              <div className="w-1/3 bgMainB3 h-full"></div>
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center h-2/3 w-full border-violet-900 border-2">
            <div className="h-2/3 w-full border-b-white border-b bgMain3"></div>
            <div className="flex justify-center items-center h-1/3 w-full">
              <div className="w-1/3 bgMainC1 h-full"></div>
              <div className="w-1/3 bgMainC2 h-full border-8 border-orange-300"></div>
              <div className="w-1/3 bgMainC3 h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
