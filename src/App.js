import React from "react";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";


function App(){
  return (
    < >
 <Routes>
 <Route exact path="/" Component={Home}/>
 <Route exact path="project" Component={Project}/>
 <Route exact path="about" Component={About} />
 <Route exact path="contact" Component={Contact} />   
 </Routes>
 </>
  );
}

export default App;
