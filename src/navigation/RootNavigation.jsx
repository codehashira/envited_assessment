import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "../event/Event";
import Home from "../home/Home";
import Create from "../create/Create";

const RootNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
};
export default RootNavigation;
