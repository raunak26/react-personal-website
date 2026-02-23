import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Index from './pages/index/index';

import Aos from 'aos';

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect( () => {
      Aos.init( { duration: 1200 } );
    }, [] );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/work">
            <Redirect to="/#work" />
          </Route>
          <Route path="/">
            <Index theme={theme} onToggleTheme={toggleTheme} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
