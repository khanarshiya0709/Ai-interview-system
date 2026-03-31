import { Routes, Route, Navigate } from "react-router-dom";

// public
import Landing from "./pages/Landing";
import AuthPage from "./pages/AuthPage";

// layouts
import CandidateLayout from "./layouts/CandidateLayout";
import HRLayout from "./layouts/HRLayout";

// candidate
import Dashboard from "./pages/candidate/Dashboard";
import Jobs from "./pages/candidate/Jobs";
import JobDetails from "./pages/candidate/JobDetails";
import Applications from "./pages/candidate/Applications";

// HR
import HRDashboard from "./pages/hr/HRDashboard";
import Applicants from "./pages/hr/Applicants";
import JobsHR from "./pages/hr/Jobs";
import JobDetailsHR from "./pages/hr/JobDetails";
import CreateJob from "./pages/hr/CreateJob";
import Profile from "./pages/hr/Profile";

function App() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthPage />} />

      {/* Candidate */}
      <Route path="/candidate" element={<CandidateLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:id" element={<JobDetails />} />
        <Route path="applications" element={<Applications />} />
      </Route>

      {/* HR */}
      <Route path="/hr" element={<HRLayout />}>
        <Route index element={<Navigate to="dashboard" />} />

        <Route path="dashboard" element={<HRDashboard />} />
        <Route path="jobs" element={<JobsHR />} />
        <Route path="jobs/:id" element={<JobDetailsHR />} />
        <Route path="create-job" element={<CreateJob />} />
        <Route path="applicants" element={<Applicants />} />
        <Route path="profile" element={<Profile />} />
      </Route>

    </Routes>
  );
}

export default App;