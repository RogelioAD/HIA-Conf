import React from "react";
import { Link } from "react-router-dom";
import videoSrc from "../images/MessagesApk-2025-01-11-11-15-15-4.mp4";

const HeaderVideo = () => (
  <video className="videocontainer" autoPlay loop muted>
    <source src={videoSrc} type="video/mp4" />
  </video>
);

const HeaderText = () => (
  <div className="headertext thinfont">
    <div className="headertext1">
      <p className="ht1div">
        Join us for an incredible week encountering God’s presence. This event
        is ticketed to enter and registration is required. You only pay a one-time fee
        for the whole week!
      </p>
    </div>
    <div className="headertext2">
      <ActionButton to="/" text="REGISTER" />
    </div>
    <div className="headertext4">
      <h3 className="ht4div1 regularfont">LOW COST INITIATIVE</h3>
      <p className="ht4div2">
        At Here I am Conference, we've implemented a low-cost initiative to
        ensure that everyone, regardless of their financial situation, can
        participate and experience the transformative power of Jesus. We
        understand that many young people may face financial barriers that
        prevent them from attending events like ours. Therefore, we have taken
        deliberate steps to keep our conference affordable without compromising
        on quality or impact.
      </p>
    </div>
  </div>
);

const FAQSection = () => (
  <div className="headerimage">
    <div className="headerimage1">
      <ActionButton to="/" text="FAQ" />
    </div>
    <div className="headerimage2">
      <div className="hi2faq">
        <p>What time does the conference start?</p>
        <p>Will you live stream?</p>
        <p>Can I pay at the door?</p>
        <p>Is there a group discount?</p>
      </div>
    </div>
    <div className="headerimage3">
      <h3 className="hi3div1 regularfont">OUR WHY</h3>
      <p className="hi3div2">
        At Here I am Conference, we've implemented a low-cost initiative to
        ensure that everyone, regardless of their financial situation, can
        participate and experience the transformative power of Jesus. We
        understand that many young people may face financial barriers that
        prevent them from attending events like ours. Therefore, we have taken
        deliberate steps to keep our conference affordable without compromising
        on quality or impact.
      </p>
    </div>
  </div>
);

const ActionButton = ({ to, text }) => (
  <div className="buttonblack">
    <Link to={to} onClick={handleButtonClick} className="nodecoration">
      {text}
    </Link>
  </div>
);

const handleButtonClick = () => {
  console.log("Button was clicked!");
};

const GuestSpeakers = () => (
  <div className="regularfontguest">
    {['GUEST SPEAKER 1', 'GUEST SPEAKER 2', 'GUEST SPEAKER 3'].map((speaker, index) => (
      <div key={index} className={index % 2 === 0 ? "speakerdivodd" : "speakerdiveven"}>
        <div className={index % 2 === 0 ? "trapezoid1" : "trapezoid2"}></div>
        <div className="speakername">{speaker}</div>
      </div>
    ))}
  </div>
);

function HIAHomePage() {
  return (
    <div>
      <div className="headerbackground">
        <HeaderVideo />
      </div>
      <div className="section2bg">
        <div className="section2container">
          <HeaderText />
          <FAQSection />
        </div>
      </div>
      <div className="datediv regularfont">
        <p>DATES AND TIMES HERE</p>
      </div>
      <GuestSpeakers />
    </div>
  );
}

export default HIAHomePage;