import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GardenPage from "./pages/GardenPage";
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/garden" element={<GardenPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/leaderboard" element={<LeaderboardPage />}/>
      </Routes>
    </div>
  )
}

export default App
