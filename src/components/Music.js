import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo3 from "../assets/logo3.png";
import logo1 from "../assets/logo1.png";

const App = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleFormSubmit /* = async (event) => */(event) {
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
          setIsRegistered(true);
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
        <form
          className="flex justify-end items-center gap-2 py-1"
          onSubmit={handleFormSubmit}
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
          {!isRegistered && (
            <button
              type="submit"
              className="border-2 border-blue-500 m-0 px-3 py-0 bg-slate-300"
            >
              Login
            </button>
          )}
        </form>
      </nav>
      <div className="secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex justify-center items-center">
        {!isRegistered && <p>Welcome to SITE TITLE</p>}
        {isRegistered && (
          <div className="relative">
            <img
              src={logo1}
              alt="logo 1"
              className="cursor-pointer"
              onClick={() => navigate("/music1")}
            />
            <p className="absolute left-1/2 bottom-1/4 -translate-x-1/2">
              Go to your dashboard!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
