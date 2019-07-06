import React from 'react';
import './App.sass';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import MainPage from './components/pages/main-page';
import OurCoffee from './components/pages/our-coffee';
import Pleasure from './components/pages/pleasure';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/our-coffee" component={OurCoffee} />
          <Route path="/for-your-pleasure" component={Pleasure} />
          <Route path="/contact-us" component={OurCoffee} />
        </Switch>
        <AppFooter />
      </div>
    </Router>
    
  );
}

export default App;
