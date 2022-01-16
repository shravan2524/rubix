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

function App() {
  return (
    <React.Fragment>
      <Header />
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
