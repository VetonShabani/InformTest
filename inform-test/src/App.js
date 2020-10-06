import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import PizzaMenu from './pages/pizza-menu/pizza-menu.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/menu" component={PizzaMenu}/>
        </Switch>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
