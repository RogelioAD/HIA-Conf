import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import HomePage from "./HIAcomponents/HIAHomePage";
import MerchPage from "./HIAcomponents/MerchPage";
import GuestSpeakers from "./HIAcomponents/GuestSpeakers";
import FaqPage from "./HIAcomponents/FaqPage";
import "./styles/App.css";

function App() {
  const navLinks = [
    { path: "/merch", label: "MERCH" },
    { path: "https://harvestonline.churchcenter.com/registrations/events/2676756", label: "REGISTER" },
    { path: "/faq", label: "FAQ" }
  ];

  const FooterSection = () => (
    <div className="footersection subheaderfont">
      <div className="footerContent">
        <div className="footerLeft">
          <h3>CONTACT US</h3>
          <p>Email: amarler@harvestonline.church</p>
        </div>
        <div className="footerCenter">
          <h3>LOCATION</h3>
          <p>Harvest Church</p>
          <p>Downtown Turlock Campus</p>
          <p>130 3rd St, Turlock, CA 95380</p>
        </div>
        <div className="footerRight">
          <h3>FOLLOW US</h3>
          <div className="socialLinks">
            <a href="https://www.instagram.com/harvestyouth.church/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/harvestonline.church/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="content-wrapper">
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
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/merch" element={<MerchPage />} />
              <Route path="/speaker" element={<GuestSpeakers />} />
              <Route path="/faq" element={<FaqPage />} />
            </Routes>
          </div>
          
          <FooterSection />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
