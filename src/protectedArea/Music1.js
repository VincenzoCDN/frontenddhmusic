import { useState } from "react";
import logo from "/Users/vinga/OneDrive/Desktop/vcdn/src/assets/logo1.png"

export default function Music() {
  const [video, setVideo] = useState();
  const [title, setTitle] = useState();
  const [artistName, setArtistName] = useState();
  const [song, setSong] = useState(0);

  function inputHandle(event) {
    setSong(event.target.value);
  }

  function handleVideo(event) {
    event.preventDefault();
    fetch(`http://localhost:8080/songs/play/${song}`).then((data) =>
      data.text().then((data) => setVideo(data))
    );
    fetch(`http://localhost:8080/songs/getTitile/${song}`).then((data) =>
      data.text().then((data) => setTitle(data))
    );
    fetch(`http://localhost:8080/songs/getArtistName/${song}`).then((data) =>
      data.text().then((data) => setArtistName(data))
    ); 

  
  }

  return (
    <div className="h-screen flex justify-center items-center bg-slate-400"> 
      <div className="flex flex-col justify-center items-center gap-3 bg-slate-600 p-5">
        <form onSubmit={handleVideo} className="border-2 border-black">
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
            className="bg-slate-300 my-2"
            size="3"
          />
          <button className="px-5 border border-black mx-5 hover:bg-purple-700" type="submit">
            Submit
          </button>
        </form>

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
          
        ):  video && video === "error"? <p>Video not found</p>: null }  <div className="flex justify-between items-center w-full">{title && <p className="w-1/3 font-bold">Titolo: <span className="font-normal">{title}</span></p>}{artistName && title ? (
          <div className="w-1/3 flex justify-center items-center">
            <img src={logo} width={40} height={40} alt="devlogo" />
          </div>
        ) : (
          <div className="w-full flex justify-center items-center">
            <img src={logo} width={40} height={40} alt="devlogo" />
          </div>
        )}{artistName && <p className="w-1/3 text-right font-bold">Artista: <span className="font-normal">{artistName}</span></p>}</div>
      </div>
    </div>
  );
}
