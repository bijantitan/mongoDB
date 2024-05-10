import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/login/Register';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <Home />
          </>
        } />

      </Routes>
    </Router>
  );
}

export default App;
