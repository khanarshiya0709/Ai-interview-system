import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AuthPage from "./components/AuthPage";
import Dashboard from "./pages/Candidate/Dashboard";
import Job from "./pages/Candidate/Job";
import JobDetails from "./pages/Candidate/JobDetails";
import Applications from "./pages/Candidate/Applications.jsx"




function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/auth" element={<AuthPage />} />

      <Route path="/candidate" element={<Dashboard />} />

      <Route path='/jobss' element={<Job />} />

      <Route path='/job-details' element={<JobDetails />} />

      <Route path="/applications" element={<Applications />} />

    </Routes>
  );
}

export default App;