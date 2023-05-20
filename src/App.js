import ProtectedArea from "./components/pages/protectedArea/ProtectedArea";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Homepage from "./components/pages/Homepage";
import Dashboard from "./components/pages/protectedArea/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route element={<ProtectedArea />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/dashboardprova" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
