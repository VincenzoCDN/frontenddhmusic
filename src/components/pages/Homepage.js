import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { css } from "aphrodite";
import styles from "../utils/Animations";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function Homepage() {
  const [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }
  function handleLogin(event) {
    event.preventDefault();
    let myStatus = "";

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((datas) => {
        myStatus = datas;
        localStorage.setItem("My Token", datas);
      })
      .then((datas) => {
        let myData = localStorage.getItem("My Token");

        if (
          myData !== "User not found" &&
          myData !== "Bad input" &&
          myData !== "Invalid password"
        ) {
          localStorage.setItem("loggedIn", data.email);
          alert("User logged in successfully");

          navigate("/dashboard");
        } else {
          alert(myStatus);
        }
      })
      .catch((error) => alert(error));
  }

  return (
    <div className="h-screen w-screen bg-red-800">
      <Navbar />
      <div className="secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 py-3 md:py-0">
        <div
          className={`${css(
            styles.fadeInLeft
          )} flex flex-col justify-center items-center md:mb-0 h-1/3 md:h-2/3  w-3/4 sm:w-2/4 md:w-1/4 border-violet-900 border-2 `}
        >
          <div className="h-2/3 w-full border-b-white border-b bgMain1"></div>
          <div className="flex justify-center items-center h-1/3 w-full">
            <div className="w-1/3 bgMainA1 h-full"></div>
            <div className="w-1/3 bgMainA2 h-full border-8 border-yellow-100"></div>
            <div className="w-1/3 bgMainA3 h-full"></div>
          </div>
        </div>
        <div
          className={`${css(
            styles.fadeInUp
          )} flex flex-col justify-center items-center md:mb-0 h-1/3 md:h-2/3  w-3/4 sm:w-2/4 md:w-1/4 border-violet-900 border-2 `}
        >
          <div className="h-2/3 w-full border-b-white border-b bgMain2"></div>
          <div className="flex justify-center items-center h-1/3 w-full">
            <div className="w-1/3 bgMainB1 h-full"></div>
            <div
              className={`${css(
                styles.pulse
              )} w-1/3 bgMainB2 h-full border-8 border-violet-300 cursor-pointer`}
              onClick={() => setShowModal(true)}
            ></div>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}

                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-t from-blue-900 to-blue-700 text-white outline-none focus:outline-none">
                      <form className="w-72 sm:w-96" onSubmit={handleLogin}>
                        <h1 className="text-xl text-center my-6 ">
                          Login into yuor account.
                        </h1>
                        <div className="mb-1 px-4 sm:mb-2">
                          <input
                            placeholder="E-mail"
                            required
                            type="mail"
                            className=" text-black flex-grow w-full py-2 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            name="email"
                            onChange={handleInput}
                            value={data.email}
                          />
                        </div>
                        <div className="mb-1 px-4 sm:mb-2">
                          <input
                            placeholder="Password"
                            required
                            type="password"
                            className="text-black flex-grow w-full py-2 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            onChange={handleInput}
                            value={data.password}
                          />
                        </div>
                        <div className="mt-4 px-1 mb-2 sm:mb-4 flex justify-between">
                          <button
                            className=" hover:text-slate-400 border-2 border-slate-200 bg-myBlue-700 rounded-md items-center justify-center px-6 font-medium text-slate-200 mx-3 mb-5 py-1"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            className=" border-2 hover:text-slate-400 border-myBlue-100 bg-myBlue-700 rounded-md items-center justify-center  font-medium text-slate-200 mx-3 mb-5 w-full px-6 py-1"
                          >
                            Login
                          </button>
                        </div>
                      </form>

                      {/*body*/}
                      {/*footer*/}
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <div className="w-1/3 bgMainB3 h-full"></div>
          </div>
        </div>
        <div
          className={`${css(
            styles.fadeInRight
          )} flex flex-col justify-center items-center md:mb-0 h-1/3 md:h-2/3  w-3/4 sm:w-2/4 md:w-1/4 border-violet-900 border-2 `}
        >
          <div className="h-2/3 w-full border-b-white border-b bgMain3"></div>
          <div className="flex justify-center items-center h-1/3 w-full">
            <div className="w-1/3 bgMainC1 h-full"></div>
            <div className="w-1/3 bgMainC2 h-full border-8 border-orange-300"></div>
            <div className="w-1/3 bgMainC3 h-full"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
