import Firstpage from './components/Firstpage';
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import RegistrationForm from './components/RegistrationForm';
import About from './components/About';
import Contactus from './components/Contactus';


function App() {
  return (<>
  
    
    <Router>
      <Contactus/>
        <Firstpage/>
    <About/>
  <Login/>
  <Register/>
  <RegistrationForm/>
      
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