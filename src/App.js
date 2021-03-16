import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar";
import Home from './components/home';
import Results from './components/results';
import Download from './components/download';
import Footer from './components/footer'
import Player from './components/player';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/results" component={Results} />
      </Switch>
      <Route path="/play/:id" component={Player} />
      <Route path="/download/:id" component={Download} />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
