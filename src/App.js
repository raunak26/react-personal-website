import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Index from './pages/index/index';
import Work from './pages/work/work';

import Aos from 'aos';

function App() {

  useEffect( () => {
      Aos.init( { duration: 1200 } );
    } );

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;