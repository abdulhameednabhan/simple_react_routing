import {BrowserRouter,Routes,Route,} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
 import Home from "./components/Home";

import  navi from "./components/navi";

import './App.css';

function App() {
  return (
    
  <BrowserRouter>
  <div>
  < About />
  <h1 >Hello World</h1>
     
    <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/about" element={< About />}/>
     
      <Route path="/contact" element={< Contact />}/>
    </Routes>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
