import Music from "./components/Music";
import Music1 from "./components/protectedArea/Music1";
import ProtectedArea from "../src/components/protectedArea/ProtectedArea";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Music />} />
      <Route element={<ProtectedArea />}>
        <Route path="/music1" element={<Music1 />} />
      </Route>
      <Route path="/music2" element={<Music1 />} />
    </Routes>
  );
}

export default App;
