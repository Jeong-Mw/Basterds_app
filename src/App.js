import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Autocomplete from'./router/AutoCompleteText'
import UserInfo from './router/UserInfo'
import LoginPage from './router/LoginPage';
import Reserve from './router/Reserve';


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <div>
            <Switch>
              <Route path="/" exact component={ Autocomplete } />
              <Route path="/info/:id" component={UserInfo} />
              <Route path="/search" component={ Autocomplete } /> 
              <Route path="/gggg" component={ LoginPage } /> 
              <Route path="/ffff" component={ Reserve } /> 
            </Switch>
          </div>
        </div>
      </Router>

      
    </div>
  );
}

export default App;
