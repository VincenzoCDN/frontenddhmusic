import React, { useState } from "react";

export default function SignUpModal() {
  const [showModal, setShowModal] = React.useState(false);

  const [allUserData, setAllUserData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
  });

  const handleInput = (event) => {
    const { name, type, value, checked } = event.target;
    setAllUserData((data) => {
      return {
        ...data,
        [name]: type !== "checkbox" ? value : checked,
      };
    });
  };

  function register(e) {
    e.preventDefault();

    /* if (
      localStorage.getItem("currentUser") &&
      localStorage.getItem("currentUser").includes(allUserData.email)
    ) {
      alert("Email already exists");
    } else {
      localStorage.setItem(
        "currentUser",
        allUserData.email + allUserData.password
      ); */

    fetch("http://localhost:8080/front2/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allUserData),
    })
      .then((res) => res.text())
      .then((data) => alert(data));

    setShowModal(false);
  }
  /*   } */

  return (
    <>
      <button
        className="lg:border-2 lg:border-blue-500 m-0 lg:px-3 py-0 lg:bg-slate-300 text-slate-200 lg:text-black border-b-2 border-slate-200 hover:text-slate-400"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Register
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-t from-blue-900 to-blue-700 text-white outline-none focus:outline-none">
                <form className="w-72 sm:w-96" onSubmit={register}>
                  <h1 className="text-xl text-center my-6 ">
                    Sign up and start listening to Music!
                  </h1>
                  <div className="mb-1 px-4 sm:mb-2">
                    <input
                      placeholder="Username"
                      required
                      type="text"
                      className=" text-black flex-grow w-full py-1 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="username"
                      onChange={handleInput}
                      value={allUserData.username}
                    />
                  </div>
                  <div className="mb-1 px-4 sm:mb-2">
                    <input
                      placeholder="E-mail"
                      required
                      type="email"
                      className=" text-black flex-grow w-full py-1 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="email"
                      onChange={handleInput}
                      value={allUserData.email}
                    />
                  </div>
                  <div className="mb-1 px-4 sm:mb-2">
                    <input
                      placeholder="Password"
                      required
                      type="password"
                      className=" text-black flex-grow w-full py-1 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                      onChange={handleInput}
                      value={allUserData.password}
                    />
                  </div>
                  <div className="mb-1 px-4 sm:mb-2">
                    <input
                      placeholder="First Name"
                      required
                      type="text"
                      className=" text-black flex-grow w-full py-1 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="name"
                      onChange={handleInput}
                      value={allUserData.name}
                    />
                  </div>
                  <div className="mb-1 px-4 sm:mb-2">
                    <input
                      placeholder="Last Name"
                      required
                      type="text"
                      className=" text-black flex-grow w-full py-1 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="surname"
                      onChange={handleInput}
                      value={allUserData.surname}
                    />
                  </div>
                  <div className="mb-1 px-4 sm:mb-2">
                    <label>Date Of Birth</label>
                    <input
                      required
                      type="date"
                      className=" text-black flex-grow w-full py-1 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="dateOfBirth"
                      onChange={handleInput}
                      value={allUserData.dateOfBirth}
                      min="1900-01-01"
                      max="2099-12-31"
                    />
                  </div>

                  <fieldset className="flex justify-center items-center border-2 border-black m-2">
                    <legend>Gender</legend>
                    <div className="flex justify-center items-center w-1/4">
                      <label>Male</label>
                      <div className="mb-1 px-4 sm:mb-2">
                        <input
                          placeholder="Gender"
                          required
                          type="radio"
                          className=""
                          name="gender"
                          onChange={handleInput}
                          value={"male"}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center items-center w-1/4">
                      <label>Female</label>

                      <div className="mb-1 px-4 sm:mb-2">
                        <input
                          placeholder="Gender"
                          required
                          type="radio"
                          className=""
                          name="gender"
                          onChange={handleInput}
                          value={"female"}
                        />
                      </div>
                    </div>
                  </fieldset>
                  <div className="mb-1 px-4 sm:mb-2">
                    {" "}
                    <label>Nationality</label>
                    <select
                      className=" text-black flex-grow w-full py-1 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      onChange={handleInput}
                      value={allUserData.nationality}
                      name="nationality"
                    >
                      <option></option>
                      <option>English</option>
                      <option>Italian</option>
                      <option>Chinese</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Japanese</option>
                      <option>Portuguese</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                  <div className="mt-4 px-1 mb-2 sm:mb-4 flex justify-between">
                    <button
                      className="border-myBlue-100 bg-myBlue-700 border-2  rounded-md items-center justify-center px-6 font-medium hover:text-slate-400 text-slate-200 mx-3 mb-5 py-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="border-myBlue-100 bg-myBlue-700 border-2  rounded-md items-center justify-center hover:text-slate-400 font-medium text-slate-200 mx-3 mb-5 w-full px-6 py-1"
                    >
                      Register
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
    </>
  );
}
