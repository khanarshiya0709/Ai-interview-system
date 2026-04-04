import { Routes, Route, Navigate } from "react-router-dom";

// public
import Landing from "./pages/Landing";
import AuthPage from "./pages/AuthPage";

// layouts
import CandidateLayout from "./layouts/CandidateLayout";
import HRLayout from "./layouts/HRLayout";

// candidate
import CandidateProfile from "./pages/candidate/CandidateProfile";
import Dashboard from "./pages/candidate/Dashboard";
import CandidateJobs from "./pages/candidate/CandidateJobs";
import CandidateJobDetails from "./pages/candidate/CandidateJobDetails";
import Interview from "./pages/candidate/Interview";
import InterviewScreen from "./pages/candidate/InterviewScreen";



// HR
import HRDashboard from "./pages/hr/HRDashboard";
import Applicants from "./pages/hr/Applicants";
import HRJobs from "./pages/hr/HRJobs";
import HRJobDetails from "./pages/hr/HRJobDetails";
import CreateJob from "./pages/hr/CreateJob";
import HRProfile from "./pages/hr/HRProfile";

function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthPage />} />

      {/* Candidate Section */}
      <Route path="/candidate" element={<CandidateLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<CandidateProfile />} />
        <Route path="jobs" element={<CandidateJobs />} />
        <Route path="jobs/:id" element={<CandidateJobDetails />} />
        <Route path="interview" element={<Interview />} />
        <Route path="interview/start" element={<InterviewScreen />} />
      </Route>

      {/* HR Section */}
      <Route path="/hr" element={<HRLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<HRDashboard />} />
        <Route path="jobs" element={<HRJobs />} />
        <Route path="jobs/:id" element={<HRJobDetails />} />
        <Route path="create-job" element={<CreateJob />} />
        <Route path="applicants" element={<Applicants />} />
        <Route path="profile" element={<HRProfile />} />
      </Route>

    </Routes>
  );
}

export default App;