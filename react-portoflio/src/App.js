import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


class App extends React.Componenet {
  render() {
    return (
      <>
      <BrowserRouter>
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
