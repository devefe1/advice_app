import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Login from './components/Login';
import Advice from './components/Advice';
// import Review from './components/Review';
// import Footer from './components/Footer';
// import Signup from './components/Signup';
// import MyAdvice from './components/MyAdvice';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router> 
          <Switch>
                {/* <Route path='/' exact component={Login} /> */}
              {/* <Route path='/signup' component={Signup} /> */}
              <Route path='/advice' component={Advice} />
              {/* <Route path='/myadvice' component={MyAdvice} /> */}
              {/* <Route path='/review' component={Review} />  */}
          </Switch>
          {/* <Footer/> */}
        </Router>
    </div>
  );
}

export default App;
