import { AuthProvider } from "./context/auth-context"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./components/landing";
import Dashboard from "./pages/dashboard";
import Commit from "./pages/commit";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route path="/u" element={<Dashboard />}>
            <Route path="dashboard" element={<Home />} />
            <Route path="commits" element={<Commit />} />
            {/* Add additional routes here as needed */}
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App
