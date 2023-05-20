import { useState } from "react";
import logo3 from "../../assets/logo3.png";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Navbar() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loggedIn = localStorage.getItem("loggedIn");
  const userRole = localStorage.getItem('role')
  const userName = localStorage.getItem('username')

  //LOGOUT
  function logOut() {
    localStorage.clear();
    navigate("/");
    window.location.reload(true);
  }

  //NAVBAR LOGIN
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
          localStorage.setItem("loggedIn", email);
          navigate("/dashboard");
        } else {
          alert(myStatus);
        }
      })
      .catch((error) => alert(error));
  }

  return (
    <nav className="flex justify-between items-center border-b-2 border-white bg-blue-900 mainContainer">
      <a href="/">
        <img src={logo3} alt="logo 3" className="px-2 py-1 w-48" />
      </a>
      <div className={loggedIn ? "hidden lg:flex justify-between" : "hidden"}>
        <button
          className="text-slate-100 px-2 hover:text-myBlue-400"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="text-slate-100 px-2 hover:text-myBlue-400"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      </div>
      <div
        className={
          !loggedIn
            ? "lg:flex justify-center gap-2 items-center pr-2 hidden w-fit"
            : "hidden"
        }
      >
        <form
          className="flex justify-center items-center gap-2 py-1"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            value={email}
            onChange={handleemailChange}
            placeholder="E-mail"
            className="border-2 border-blue-500 px-3 py-0 bg-slate-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="border-2 border-blue-500 px-3 py-0 bg-slate-300"
            required
          />
          <button
            type="submit"
            className="border-2 border-blue-500 mr-0 px-3 py-0 bg-slate-300"
          >
            Login
          </button>
        </form>
        <div>
          <SignUpModal />
        </div>
      </div>
      {/*  BURGER MENU */}
      <div className="px-2 py-1 lg:hidden z-10">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2  rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-slate-200" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-3 right-3 w-auto bg-blue-800">
            <div className="p-5 bg-gradient-to-t from-myBlue-700 to-myBlue-400 w-full border-2 border-myBlue-100">
              <div className="flex items-center justify-between mb-4 pb-1 border-b-2 border-myBlue-100">
                <a href="/">
                  <img src={logo3} alt="logo" className="h-5" />
                </a>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="rounded pl-4 p-2 "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      className="w-4 text-slate-200  hover:text-slate-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4 text-slate-200">
                  <li>
                    <a
                      href="/"
                      title="home"
                      className=" hover:text-myBlue-800 border-b-2 border-slate-200 hover:text-slate-400 "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <LoginModal className={loggedIn ? "hidden" : ""} />
                  </li>
                  <li className={loggedIn ? "hidden" : ""}>
                    <SignUpModal />
                  </li>
                  <li className={!loggedIn ? "hidden" : ""}>
                    <a
                      href="/dashboard"
                      title="dashboard"
                      className=" border-b-2 border-slate-200 hover:text-slate-400"
                    >
                      Dashboard
                    </a>
                  </li>
                  {
                    <li className={!loggedIn ? "hidden" : ""}>
                      <a
                        href="/"
                        className=" border-b-2 border-slate-200 hover:text-slate-400"
                        onClick={logOut}
                      >
                        Logout
                      </a>
                    </li>
                  }
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
      <div
        className={
          !loggedIn
            ? "hidden"
            : "hidden lg:flex relative items-center justify-center px-2"
        }
      >
        <a
          href="/"
          className=" border-2 border-blue-500 m-0 px-3 py-0 bg-slate-300"
          onClick={logOut}
        >
          Logout
        </a>
        <div className={"text-slate-100 absolute w-max top-1/4 right-full"}>
          <p>Welcome, {loggedIn && loggedIn} STAUTS {userRole && userRole}</p>
        </div>
      </div>
    </nav>
  );
}
