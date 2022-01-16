import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import MainHeader from "./Aniket/Header/MainHeader";
import Login from "./Aniket/Login/Login";
import Profile from "./Aniket/Profile/Profle";
import Homepage from "./Aniket/Homepage/Homepage";
import Mapsscreen from "./Mapsscreen";
import Header from "./components/Header/Header";

function App() {
  return (
    <React.Fragment>
      {/* <MainHeader />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router> */}
      <Header />
      {/* <Mapsscreen /> */}
    </React.Fragment>
  );
}

export default App;
