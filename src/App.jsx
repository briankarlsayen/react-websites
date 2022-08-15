import './App.css'
import Hotel from './pages/hotel'
import Onboarding from './pages/onboarding'
import { Routes, Route, Link } from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route exact path="/react-websites/hotel" element={<Hotel />} />
      <Route exact path="/react-websites/onboarding" element={<Onboarding/>} />
    </Routes>
  )
}

export default App
