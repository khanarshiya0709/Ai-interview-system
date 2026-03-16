import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AuthPage from "./components/AuthPage";
import Dashboard from "./pages/Candidate/Dashboard";




function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/auth" element={<AuthPage />} />

      <Route path="/candidate" element={<Dashboard />} />

    </Routes>
  );
}

export default App;