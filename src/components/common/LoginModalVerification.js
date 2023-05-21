import React, { useState } from "react";

export default function LoginModal() {
  const [showModal, setShowModal] = React.useState(false);
  const [code, setCode] = useState("");

  const myId = localStorage.getItem("id");

  function handleInput(event) {
    setCode(event.target.value);
  }

  function handleVerification(event) {
    event.preventDefault();
    //ACCOUNT ACTIVATION
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;

    fetch(
      `http://localhost:8080/front2/verificate_code/${myId + "?code=" + code}`,
      {
        method: "PUT",
        headers: {
          Authorization: myCompleteToken,
        },
      }
    )
      .then((res) => res.text())
      .then((data) => alert(data));
  }

  return (
    <>
      <button
        className="lg:border-2 lg:border-blue-500 m-0 lg:px-3 py-0 lg:bg-slate-300 text-slate-200 lg:text-black border-b-2 border-slate-200 hover:text-slate-400"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-t from-blue-900 to-blue-700 text-white outline-none focus:outline-none">
                <form className="w-72 sm:w-96" onSubmit={handleVerification}>
                  <h1 className="text-xl text-center my-6 ">
                    Verify your identity
                  </h1>
                  <div className="mb-1 px-4 sm:mb-2">
                    <input
                      placeholder="Code"
                      required
                      type="text"
                      className=" text-black flex-grow w-full py-2 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="code"
                      onChange={handleInput}
                      value={code}
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
                      Verify
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
