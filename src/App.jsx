import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import CandidateD from "./pages/Candidate/CandidateD";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/auth" element={<Auth />} />

      <Route path="/candidate" element={<CandidateD />} />

    </Routes>
  );
}

export default App;