import { useEffect, useState } from "react";
/* import logo1 from "../../../assets/logo1.png"; */
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
  const [hideMe, setHideMe] = useState(false)

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
  }, [role, username]);


  function handleVideo1(event) {
    event.preventDefault();
    fetch(`http://localhost:8080/front/play/${artistData[1]}`).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/songs/getTitile/${artistData[1]}`).then((data) =>
      data.text().then((data) => setTitle(data))
    );
    fetch(`http://localhost:8080/songs/getArtistName/${artistData[1]}`).then((data) =>
      data.text().then((data) => setArtistName(data))
    );

    setHideMe(true)
  } 

  function handleVideo2(event) {
    event.preventDefault();
    fetch(`http://localhost:8080/front/play/${artistData[2]}`).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/songs/getTitile/${artistData[2]}`).then((data) =>
      data.text().then((data) => setTitle(data))
    );
    fetch(`http://localhost:8080/songs/getArtistName/${artistData[2]}`).then((data) =>
      data.text().then((data) => setArtistName(data))
    );

    setHideMe(true)
  } 


  function handleVideo3(event) {
    event.preventDefault();
    fetch(`http://localhost:8080/front/play/${artistData[3]}`).then((data) =>
      data
        .text()
        .then((data) => setVideo(data))
        .catch((err) => console.log(err))
    );
    fetch(`http://localhost:8080/songs/getTitile/${artistData[3]}`).then((data) =>
      data.text().then((data) => setTitle(data))
    );
    fetch(`http://localhost:8080/songs/getArtistName/${artistData[3]}`).then((data) =>
      data.text().then((data) => setArtistName(data))
    );

    setHideMe(true)
  } 


  //GET RANDOM ARTIST 1
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
      .then((data) => setArtistData(data.split(',')));
    // eslint-disable-next-line
  }, []);

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
        .then((data) => setArtistData2(data.split(',')));
      // eslint-disable-next-line
    }, []);

      //GET RANDOM ARTIST 3
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
      .then((data) => setArtistData3(data.split(',')));
    // eslint-disable-next-line
  }, []);

 /*  useEffect(() => {

  }, [artistData]) */
  



  return (
    <div className="h-screen w-screen bg-red-800">
      <Navbar />
      <div className="secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex flex-col justify-center items-center gap-6">       
    <div className={hideMe ? "hidden" : "flex justify-around items-center gap-8 h-1/6 w-4/6 border-2 border-violet-900 relative"}>
          <div className="flex justify-center items-center" onClick={handleVideo1}>
            {artistData[1]}
          </div>
          <div className="flex justify-center items-center" onClick={handleVideo2}>
            {artistData[2]}
          </div>
          <div className="flex justify-center items-center" onClick={handleVideo3}>
            {artistData[3]}
          </div>
          <p className="absolute top-2 left-5" >Artist: {artistData[0]}</p>
        </div>
        <div className="flex justify-around items-center gap-8 h-1/6 w-4/6 border-2 border-violet-900 relative">
          <div className="flex justify-center items-center">
            {artistData2[1]}
          </div>
          <div className="flex justify-center items-center">
            {artistData2[2]}
          </div>
          <div className="flex justify-center items-center">
            {artistData2[3]}
          </div>
          <p className="absolute top-2 left-5">Genre: {artistData2[0]}</p>
        </div>
        <div className="flex justify-around items-center gap-8 h-1/6 w-4/6 border-2 border-violet-900 relative">
          <div className="flex justify-center items-center">
            {artistData3[0]}
          </div>
          <div className="flex justify-center items-center">
            {artistData3[1]}
          </div>
          <div className="flex justify-center items-center">
            {artistData3[2]}
          </div>
          <p className="absolute top-2 left-5">Last songs</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
