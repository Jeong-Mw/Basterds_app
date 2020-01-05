import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from'./router/Search'
import UserInfo from './router/UserInfo'


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <div>
            <Switch>
              <Route path="/" exact component={ Search } />
              <Route path="/info" component={UserInfo} />
              <Route path="/search" component={ Search } />
            </Switch>
          </div>
        </div>
      </Router>

      
    </div>
  );
}

export default App;
