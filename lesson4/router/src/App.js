import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './About/About';
import Home from './Home/Home';
import Team from './Team/Team';
import Contact from './Contact/Contact';


function App() {
  return (
    <div className='App'>
      <Router>
          <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/home' component={Home}/>
            <Route path='/team' component={Team}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
      </Router>
    </div>
    
  );
}

export default App;
