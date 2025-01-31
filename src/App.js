import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import HomePage from "./HIAcomponents/HIAHomePage";
import MerchPage from "./HIAcomponents/MerchPage";
import GuestSpeakers from "./HIAcomponents/GuestSpeakers";
import FaqPage from "./HIAcomponents/FaqPage";

function App() {
  const navLinks = [
    { path: "/merch", label: "MERCH" },
    { path: "/speaker", label: "GUEST SPEAKERS" },
    { path: "/faq", label: "FAQ" }
  ];

  return (
    <div>
      <BrowserRouter>
        {/* Navigation Bar */}
        <div className="navbar">
          {/* Logo */}
          <div className="navbaroptions navbarlogo">
            <Link className="navbarlink" to="/">
              HIA CONF
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="navbaroptions">
            <nav>
              {navLinks.map((link, index) => (
                <React.Fragment key={link.path}>
                  <Link className="navbarlink" to={link.path}>
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && <span> </span>}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/speaker" element={<GuestSpeakers />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
