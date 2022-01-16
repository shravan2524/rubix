import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import Header from "./Aniket/Header/Header";
import Login from "./Aniket/Login/Login";
import Profile from "./Aniket/Profile/Profle";
import Homepage from "./Aniket/Homepage/Homepage";
import Wishlist from "./Khyati/Wishlist/Wishlist";
import Trips from './Khyati/Trips/Trips';

function App() {
  return (
    <React.Fragment>
      <Header />
       <Trips/>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route exact path="/"></Route> */}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
