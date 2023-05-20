import { useEffect, useState } from "react";
import logo1 from "../../../assets/logo1.png";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

export default function Dashboard() {
  const [video, setVideo] = useState();
  const [title, setTitle] = useState();
  const [username, setUsername] = useState();
  const [id, setId] = useState();
  const [artistName, setArtistName] = useState();
  const [song, setSong] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8080/users/get-id`)
      .then((data) => data.text())
      .then((data) => console.log(data));
  }, []);

  function inputHandle(event) {
    setSong(event.target.value);
  }

  function handleVideo(event) {
    event.preventDefault();
    fetch(`http://localhost:8080/songs/play/${song}`).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/songs/getTitile/${song}`).then((data) =>
      data.text().then((data) => setTitle(data))
    );
    fetch(`http://localhost:8080/songs/getArtistName/${song}`).then((data) =>
      data.text().then((data) => setArtistName(data))
    );
  }

  return (
    <div className="h-screen w-screen bg-red-800">
      <Navbar />
      <div className="secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3 bg-gradient-to-b from-blue-700 to-blue-900 p-5">
          <form onSubmit={handleVideo} className="border-2 border-slate-200">
            <label htmlFor="songs" className="px-5 font-bold">
              Choose a song :
            </label>

            <input
              onChange={inputHandle}
              type="number"
              id="song"
              name="songs"
              min="1"
              max="100"
              value={song}
              className="bg-slate-300 my-2 text-black"
              size="3"
            />
            <button
              className="px-5 border border-slate-200 mx-5 hover:bg-purple-700"
              type="submit"
            >
              Submit
            </button>
          </form>
          {video && video !== "error" ? (
            <iframe
              width="1000"
              height="500"
              src={video}
              title="YouTube video player"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
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
                <img src={logo1} width={40} height={40} alt="devlogo" />
              </div>
            )}
            {artistName && (
              <p className="w-1/3 text-right font-bold">
                Artista: <span className="font-normal">{artistName}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
