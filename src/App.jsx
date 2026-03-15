// import { Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Auth from "./pages/Auth";

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Landing />} />
//       <Route path='signUp' element={<Auth />} />
//     </Routes>
//   )
// }

// export default App;

import AuthPage from './components/AuthPage';

function App() {
  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

export default App;