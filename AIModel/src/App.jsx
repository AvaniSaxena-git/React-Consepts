import Firstpage from './components/Firstpage';
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (<>
    
    <Router><Firstpage/>
      <Navbar />
     <Routes>
        <Route path="/" element={ <div>Home Page</div>}> 
        </Route>
        <Route path="/about" element={<div>About Page</div>}>
        </Route>
        <Route path="/contact" element={<div>Contact Us Page</div>}>
        </Route>
     </Routes>
    </Router></>
  );
}



export default App