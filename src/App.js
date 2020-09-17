import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import destination from './fakeData/destination';
import BookingPage from './components/BookingPage/BookingPage';
import Login from './components/Login/Login';

export const DestinationContext = createContext();

function App() {

  const [currentDestination, setCurrentDestination] = useState(destination[0]);
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <DestinationContext.Provider value={[currentDestination, setCurrentDestination, loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking">
            <BookingPage></BookingPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>



          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </DestinationContext.Provider>

  );
}

export default App;
