import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./components/About/About.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Metronome from "./components/Metronome/Metronome.jsx";
import Careers from "./components/Careers/Careers.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/metronome" element={<Metronome/>}/>
                <Route path="/careers" element={<Careers/>}/>
            </Routes>
      </Router>

  </React.StrictMode>,
)