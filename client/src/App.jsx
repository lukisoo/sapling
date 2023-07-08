import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import GardenPage from "./pages/GardenPage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/garden" element={<GardenPage />}/>
          </Routes>
      </div>
  )
}

export default App
