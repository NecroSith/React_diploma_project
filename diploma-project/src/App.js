import React from 'react';
import './App.sass';
import AppFooter from './components/app-footer';
import MainPage from './components/pages/main-page';
import OurCoffee from './components/pages/our-coffee';
import Pleasure from './components/pages/pleasure';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemPage from './components/pages/item-page';
import ContactUs from'./components/pages/contact-us';
import {connect} from 'react-redux';
import Error404 from './components/404';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/coffee-app/" exact component={MainPage} />
            <Route path="/coffee-app/our-coffee" exact component={OurCoffee} />
            <Route path="/coffee-app/for-your-pleasure" component={Pleasure} />
            <Route path="/coffee-app/contact-us" component={ContactUs} />
            <Route path={`/coffee-app/our-coffee/${this.props.itemId}`} exact component={ItemPage} />
            <Route component={Error404} />
          </Switch>
          <AppFooter />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemId: state.itemId,
  }
}

export default connect(mapStateToProps)(App);
