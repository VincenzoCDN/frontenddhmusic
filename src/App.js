import Music from "./Music";
import Music1 from "./protectedArea/Music1";
import ProtectedArea from "./protectedArea/ProtectedArea"; 
import { Routes, Route } from "react-router-dom";

function App() {
  return(
  <Routes>
    <Route path="/" element={<Music /> } />
    <Route element={<ProtectedArea />}>
      <Route path="/music1" element={<Music1 /> } />
    </Route>
    
  </Routes>)
}

export default App;
