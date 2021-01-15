import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import GlobalNavbar from './Components/GlobalNavbar';
import Footer from './Components/Footer';
import './CSS/Global/App.css';


class App extends React.Component {
  render() {
    return (
      <>
      <Router>
        <div>
          <GlobalNavbar/>
            <Route exact path='/' component={About}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/contact' component={Contact}/>
          <Footer/>
        </div>
      </Router>
      </>
    );
  };
};

export default App;
