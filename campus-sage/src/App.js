import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Map from "./pages/map";
import Setting from "./pages/settings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/map" element={<Map />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
