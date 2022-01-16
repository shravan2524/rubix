import React from "react"
import './App.css';

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
    {/* <Login /> */}
    {/* <Profile /> */}
    {/* <Header />
    <Homepage /> */}
    {/* <Wishlist /> */}
       <Trips/>
    </React.Fragment>
  );
}

export default App;
