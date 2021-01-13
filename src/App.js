import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './CSS/Global/App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </BrowserRouter>
      </>
    );
  };
};

export default App;
