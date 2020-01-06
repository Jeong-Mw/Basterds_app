import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Autocomplete from'./router/AutoCompleteText'
import UserInfo from './router/UserInfo'


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <div>
            <Switch>
              <Route path="/" exact component={ Autocomplete } />
              <Route path="/info" component={UserInfo} />
              <Route path="/search" component={ Autocomplete } />
            </Switch>
          </div>
        </div>
      </Router>

      
    </div>
  );
}

export default App;
