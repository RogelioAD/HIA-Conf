import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "./styles/HIAStyles.css";
import HomePage from "./HIAcomponents/HIAHomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* navbar div */}
        <div className="navbar">
          {/* logo div */}
          <div className="navbaroptions navbarlogo">HIA CONF</div>
          {/* navbar options div */}
          <div className="navbaroptions">
            <nav>
              <Link className="navbarlink" to="/signup">OPTION ONE</Link>
              <span> </span>
              <Link className="navbarlink" to="/signin">OPTION TWO</Link>
              <span> </span>
              <Link className="navbarlink" to="/coffee">OPTION THREE</Link>
            </nav>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
