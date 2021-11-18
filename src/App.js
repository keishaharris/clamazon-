import React, {useEffect} from 'react'
import Header from './Header.js'
import './App.css';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './Checkout.js';
import Login from './Login.js';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider'


const App = () => {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app componene loads
    auth.onAuthStateChanged(authUser => {
      console.log('user is ...', authUser)
      
      if(authUser) {
        //user logged in/user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
