import { useEffect, useState } from "react";
import logo1 from "../../../assets/logo1.png";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

export default function Dashboard() {
  const [video, setVideo] = useState();
  const [title, setTitle] = useState();
  const [artistName, setArtistName] = useState();
  /*const [song, setSong] = useState(0); */
  const [role, setRole] = useState();
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [artistData, setArtistData] = useState("");
  const [artistData2, setArtistData2] = useState("");
  const [artistData3, setArtistData3] = useState("");
  const [hideMe, setHideMe] = useState(false);

  //GET ID

  useEffect(() => {
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch("http://localhost:8080/front/get-id", {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    })
      .then((data) => data.text())
      .then((data) => setId(data));
  }, []);

  //GET USERNAME
  useEffect(() => {
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front/get-username/${id}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    })
      .then((data) => data.text())
      .then((data) => setUsername(data));
  }, [id]);

  //GET ROLE
  useEffect(() => {
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front/get-user-role/${id}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    })
      .then((data) => data.text())
      .then((data) => setRole(data));
  }, [id]);

  //SET LOCAL STORAGE DATAS

  useEffect(() => {
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);
    localStorage.setItem("id", id);
  }, [role, username, id]);

  //GET RANDOM ARTIST
  useEffect(() => {
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front/getSongsRandomByArtist`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    })
      .then((data) => data.text())
      .then((data) => setArtistData(data.split(",")));
    // eslint-disable-next-line
  }, []);

  function handleVideo1(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }

  function handleVideo2(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }

  function handleVideo3(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData[3]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData[3]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData[3]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }

  //GET SONG BY GENRE
  useEffect(() => {
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front/getSongsByGenre`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    })
      .then((data) => data.text())
      .then((data) => setArtistData2(data.split(",")));
    // eslint-disable-next-line
  }, []);

  function handleVideobyGenre1(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData2[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData2[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData2[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }

  function handleVideobyGenre2(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData2[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData2[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData2[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }

  function handleVideobyGenre3(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData2[3]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData2[3]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData2[3]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }

  //GET LAST SONGS
  useEffect(() => {
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front/lastsSongs`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    })
      .then((data) => data.text())
      .then((data) => setArtistData3(data.split(",")));
    // eslint-disable-next-line
  }, []);
  function handleLastSongs1(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData3[0]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData3[0]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData3[0]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }

  function handleLastSongs2(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData3[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData3[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData3[1]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }

  function handleLastSongs3(event) {
    event.preventDefault();
    let myToken = localStorage.getItem("My Token");
    let myCompleteToken = "Bearer " + myToken;
    fetch(`http://localhost:8080/front2/play/${artistData3[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/front2/getTitile/${artistData3[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setTitle(data)));
    fetch(`http://localhost:8080/front2/getArtistName/${artistData3[2]}`, {
      method: "GET",
      headers: {
        Authorization: myCompleteToken,
      },
    }).then((data) => data.text().then((data) => setArtistName(data)));

    setHideMe(true);
  }
  return (
    <div className="h-screen w-screen bg-red-800">
      <Navbar />
      <div
        className={
          hideMe
            ? "hidden"
            : "secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex flex-col justify-center items-center gap-6"
        }
      >
        <div
          className={
            "flex justify-around items-center gap-8 h-1/6 w-4/6 border-2 border-violet-900 relative p-1 bgDashboard0"
          }
        >
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard1 cursor-pointer"
            onClick={handleVideo1}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData[1]}
            </div>
          </div>
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard1 cursor-pointer"
            onClick={handleVideo2}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData[2]}
            </div>
          </div>
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard1 cursor-pointer"
            onClick={handleVideo3}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData[3]}
            </div>
          </div>
          <p className="absolute top-2 left-5 md:font-bold md:text-xl">
            Artist {artistData[0]}
          </p>
        </div>
        <div className="flex justify-around items-center gap-8 h-1/6 w-4/6 border-2 border-violet-900 relative p-1 bgDashboard0">
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard2 cursor-pointer"
            onClick={handleVideobyGenre1}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData2[1]}
            </div>
          </div>
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard2 cursor-pointer"
            onClick={handleVideobyGenre2}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData2[2]}
            </div>
          </div>
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard2 cursor-pointer"
            onClick={handleVideobyGenre3}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData2[3]}
            </div>
          </div>
          <p className="absolute top-2 left-5 md:font-bold md:text-xl">
            Genre {artistData2[0]}
          </p>
        </div>
        <div className="flex justify-around items-center gap-8 h-1/6 w-4/6 border-2 border-violet-900 relative p-1 bgDashboard02">
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard3 cursor-pointer"
            onClick={handleLastSongs1}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData3[0]}
            </div>
          </div>
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard3 cursor-pointer"
            onClick={handleLastSongs2}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData3[1]}
            </div>
          </div>
          <div
            className="flex justify-center items-center border-2 border-violet-900 rounded-full h-16 w-16 md:h-24 md:w-24 text-3xl bgDashboard3 cursor-pointer"
            onClick={handleLastSongs3}
          >
            <div className="h-1/2 w-1/2 bg-blue-300 rounded-full flex justify-center items-center bg-opacity-80">
              {artistData3[2]}
            </div>
          </div>
          <p className="absolute top-2 left-5 md:font-bold md:text-xl">
            Last songs
          </p>
        </div>
      </div>
      <div
        className={
          !hideMe
            ? "hidden"
            : "secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex flex-col justify-center items-center gap-6"
        }
      >
        <div className="flex flex-col justify-center items-center gap-3  bg-gradient-to-b from-blue-500 to-blue-600 p-5">
          {video && video !== "error" ? (
            <iframe
              width="1000"
              height="500"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="pt-1"
            ></iframe>
          ) : video && video === "error" ? (
            <p>Video not found</p>
          ) : null}{" "}
          <div className="flex justify-between items-center w-full">
            {title && (
              <p className="w-1/3 font-bold">
                Titolo: <span className="font-normal">{title}</span>
              </p>
            )}
            {artistName && title ? (
              <div className="w-1/3 flex justify-center items-center">
                <img src={logo1} width={40} height={40} alt="devlogo" />
              </div>
            ) : (
              <div className="w-full flex justify-center items-center">
                <img
                  src={logo1}
                  width={40}
                  height={40}
                  alt="devlogo"
                  onClick={() => console.log(video)}
                />
              </div>
            )}
            {artistName && (
              <p className="w-1/3 text-right font-bold">
                Artista: <span className="font-normal">{artistName}</span>
              </p>
            )}
          </div>
          <button
            className="border border-black py-1 px-5 hover:text-slate-300 "
            onClick={() => setHideMe(false)}
          >
            BACK
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
