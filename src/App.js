import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import './CSS/Global/App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


class App extends React.Component {
  render() {
    return (
      <>
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <Route exact path='/' component={About}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/contact' component={Contact}/>
      </HashRouter>
      </>
    );
  };
};

export default App;
