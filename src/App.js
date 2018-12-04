import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/layout/About';
import Navigation from './components/layout/Navigation';
import Index from './components/layout/Index';
import Detail from './components/anime/Detail';
import {Provider} from './context';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <React.Fragment>
      <Navigation />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/anime/detail/:id" component={Detail}></Route>
      </Switch>
      </div>
      </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
