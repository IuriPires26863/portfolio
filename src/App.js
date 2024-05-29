import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


import Homepage from "./views/homepage";
import AboutMe from "./views/aboutme"
import Projects from "./views/projects"
import Projeto1 from "./views/projeto1"
import Projeto2 from "./views/projeto2";
import Projeto3 from "./views/projeto3";
import Projeto4 from "./views/projeto4";
import Projeto5 from "./views/projeto5";
import Projeto6 from "./views/projeto6";
import Projeto7 from "./views/projeto7";
import Projeto8 from "./views/projeto8";
import Projeto9 from "./views/projeto9";
import Projeto10 from "./views/projeto10";
import Projeto11 from "./views/projeto11";
import Projeto12 from "./views/projeto12";


function App() {
  return (




    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projeto1" element={<Projeto1 />} />     
          <Route path="/projeto2" element={<Projeto2 />} />    
          <Route path="/projeto3" element={<Projeto3 />} />  
          <Route path="/projeto4" element={<Projeto4 />} />  
          <Route path="/projeto5" element={<Projeto5 />} />  
          <Route path="/projeto6" element={<Projeto6 />} />  
          <Route path="/projeto7" element={<Projeto7 />} />  
          <Route path="/projeto8" element={<Projeto8 />} />  
          <Route path="/projeto9" element={<Projeto9 />} />  
          <Route path="/projeto10" element={<Projeto10 />} />  
          <Route path="/projeto11" element={<Projeto11 />} />  
          <Route path="/projeto12" element={<Projeto12 />} />  
          </Routes>
      </div>
    </Router>
  );
}
export default App;
