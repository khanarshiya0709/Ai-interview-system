import { Routes, Route } from "react-router-dom";

//public pages
import Landing from "./pages/Landing";
import AuthPage from "./pages/AuthPage";

//layouts
import CandidateLayout from "./layouts/CandidateLayout";
import HRLayout from "./layouts/HRLayout";


//candidate pages
import Dashboard from "./pages/candidate/Dashboard";
import Jobs from "./pages/candidate/Jobs";
import JobDetails from "./pages/candidate/JobDetails";
import Applications from "./pages/candidate/Applications"

//hr pages
import HRDashboard from "./pages/hr/HRDashboard";
import Applicants from "./pages/hr/Applicants"


function App() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthPage />} />

      {/* Candidate Routes */}
      <Route path="/candidate" element={<CandidateLayout />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='jobs/:id' element={<JobDetails />} />
        <Route path="applications" element={<Applications />} />
      </Route>


      {/* HR Routes */}
      <Route path="/hr" element={<HRLayout />}>
        <Route path="dashboard" element={<HRDashboard />} />

        <Route path="applicants" element={<Applicants />} />
      </Route>

    </Routes>



  );
}

export default App;