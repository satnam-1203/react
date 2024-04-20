import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm  from "./Login";
import Profile from "./Profile"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm  />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>

  );
}

export default App;
