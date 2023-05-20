import { useEffect, useState } from "react";
import logo1 from "../../../assets/logo1.png";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

export default function Dashboard() {
  const [video, setVideo] = useState();
  const [title, setTitle] = useState();
  const [role, setRole] = useState();
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [artistName, setArtistName] = useState();
  const [song, setSong] = useState(0);


//GET ID

useEffect(() => {
  let myToken = localStorage.getItem("My Token");
  let myCompleteToken = "Bearer "+ myToken
  fetch('http://localhost:8080/front/get-id', {
    method: "GET",
    headers: {
   'Authorization': myCompleteToken,
 },
})
.then((data) => data.text())
.then((data) => setId(data))
}, []); 

//GET USERNAME
useEffect(() => {
  let myToken = localStorage.getItem("My Token");
  let myCompleteToken = "Bearer "+ myToken
  fetch(`http://localhost:8080/front/get-username/${id}`, {
    method: "GET",
    headers: {
 'Authorization': myCompleteToken,
},
})
.then((data) => data.text())
.then((data) => setUsername(data))
}, [id]); 

//GET ROLE
 useEffect(() => {
  let myToken = localStorage.getItem("My Token");
  let myCompleteToken = "Bearer "+ myToken
  fetch(`http://localhost:8080/front/get-user-role/${id}`, {
    method: "GET",
    headers: {
 'Authorization': myCompleteToken,
},
})
.then((data) => data.text())
.then((data) => setRole(data))
}, [id]); 

//SET LOCAL STORAGE DATAS

useEffect(() => {
  localStorage.setItem('role', role)
  localStorage.setItem('username', username)

}, [ role, username])




/*   function inputHandle(event) {
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
  } */

  return (
    <div className="h-screen w-screen bg-red-800">
      <Navbar />
      <div className="secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex flex-col justify-center items-center">
        <div className="flex justify-center items-around gap-8 h-1/4">
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
        </div>
        <div className="flex justify-center items-around gap-8 h-1/4">
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
        </div>
        <div className="flex justify-center items-around gap-8 h-1/4">
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
        </div>
       </div>
      <Footer />
    </div>
  );
}
