import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import GardenPage from "./pages/GardenPage.jsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/garden" element={<GardenPage />}/>
    </Routes>
  )
}

export default App
