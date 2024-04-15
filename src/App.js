import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Results from "./Results";
import Surprise from "./Surprise";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </Router>
  );
}

export default App;
