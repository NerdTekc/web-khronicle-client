import { AuthProvider } from "./context/auth-context"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./components/landing";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index path="/" element={<Landing />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
