import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Menu from './pages/menu/menu.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/menu" component={Menu}/>
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
