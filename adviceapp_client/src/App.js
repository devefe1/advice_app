import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Advice from './components/Advice';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Myadvices from './components/Myadvices';

import './App.css';
import './styles/Advice.css';
import './styles/Login.css';
import './styles/Reviews.css';
import './styles/Myadvices.css';


function App() {
  return (
    <div className="App">
        <Router> 
          <Switch>
                <Route path='/' exact component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/advice' component={Advice} />
              <Route path='/myadvices' component={Myadvices} />
              <Route path='/reviews' component={Reviews} /> 
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
