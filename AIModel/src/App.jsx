import Firstpage from './components/Firstpage';
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Nothing from './components/Nothing';

function App() {
  return (<>
    
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div>Home Page</div>
        </Route>
        <Route path="/about">
          <div>About Page</div>
        </Route>
        <Route path="/contact">
          <div>Contact Us Page</div>
        </Route>
      </Switch>
    </Router><Firstpage/></>
  );
}



export default App