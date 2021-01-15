import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './CSS/Global/App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


class App extends React.Component {
  render() {
    return (
      <>
      <HashRouter basename="https://jjessee1371.github.io/React-Portfolio/">
        <Switch>
          <Route exact path='/about' component={About}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </HashRouter>
      </>
    );
  };
};

export default App;
