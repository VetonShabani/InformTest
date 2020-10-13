import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Menu from './pages/menu/menu.component';
import Footer from './components/footer/footer.component';
import SignIn from './components/sign-in/sign-in.component';

const App = () => {
  const [signIn, setSignIn] = useState(false);
  const handleSignIn = () => {
    setSignIn(!signIn)
  }
  return (
    <div className="App">

      <Router>
        <Header  handleSignIn={handleSignIn}/>
        {signIn ?
          <SignIn slideIn={'color: red'}  handleSignIn={handleSignIn}/> :  ''}
        <Switch>
          <Route path="/" exact component={() => <Homepage />} />
          <Route path="/menu" component={() => <Menu />} />
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
