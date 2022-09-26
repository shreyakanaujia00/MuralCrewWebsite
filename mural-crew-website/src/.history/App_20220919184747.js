import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from './Home'
import OctopusMuralProgress from './OctopusMuralProgress'
import HandMuralProgress from './HandMuralProgress'
import SpringMuralProgress from './SpringMuralProgress'
import RumiMuralProgress from './RumiMuralProgress'
import About from './About'
import Contact from './Contact'
import Process from './Process'
import Menu from './Menu'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Murals/IntheGreatDeep" element={<OctopusMuralProgress />} />
        <Route path="/Murals/TheCreationofScience" element={<HandMuralProgress />} />
        <Route path="/Murals/AWalkinthePark" element={<SpringMuralProgress />} />
        <Route path="/Murals/LetTheBeautyOfWhatYouLoveBeWhatYouDo" element={<RumiMuralProgress />} />
        <Route path="/Process" element={<Process />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
