import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GardenPage from "./pages/GardenPage";
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import FriendsPage from './pages/FriendsPage';
import Profile1 from './components/Profile1';

function App() {
  const appStyle = {
    backgroundColor: '#E9FFE9',
    minHeight: '100vh',
    minWidth: '100vw',
  };
  
  return (
    <div style={appStyle}>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/garden" element={<GardenPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/leaderboard" element={<LeaderboardPage />}/>
          <Route path="/friends" element={<FriendsPage />}/>
          <Route path="/edit/1" element={<Profile1/>}/>
      </Routes>
    </div>
  )
}

export default App
