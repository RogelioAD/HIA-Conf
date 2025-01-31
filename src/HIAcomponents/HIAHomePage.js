import { React, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import videoSrc from "../images/MessagesApk-2025-01-11-11-15-15-4.mp4";
import "../styles/HIAHomePage.css";

const HeaderVideo = () => (
  <div className="videocontainer">
    <video autoPlay loop muted>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const RegisterSection = () => (
  <div className="registersection subheaderfont">
    <div className="registrationquadrantone" id="alignleft">
      <p>
        Join us for an incredible week encountering God's presence. This event
        is ticketed to enter and registration is required. You only pay a
        one-time fee for the whole week!
      </p>
    </div>
    <div className="registrationquadranttwo" id="alignright">
      <ActionButton to="/" text="REGISTER" />
    </div>
    <div className="registrationquadrantthreeandfour" id="alignright">
      <h3 className="regularfont" id="nomargin">
        LOW COST INITIATIVE
      </h3>
      <p>
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
  <div className="faqsection subheaderfont">
    <div className="faqquadrantone">
      <ActionButton to="/" text="FAQ" />
    </div>
    <div className="faqquadranttwo">
      <div className="faqquestions" id="nomargin">
        <p id="nomargin">What time does the conference start?</p>
        <p id="nomargin">Will you live stream?</p>
        <p id="nomargin">Can I pay at the door?</p>
        <p id="nomargin">Is there a group discount?</p>
      </div>
    </div>
    <div className="faqquadrantthreeandfour" id="alignleft">
      <h3 className="regularfont" id="nomargin">
        OUR WHY
      </h3>
      <p>
        We are about honoring God, obeying His call, and experiencing the
        fullness of life found in Him. We come together annually, not out of
        tradition, but out of a burning passion to draw near to the heart of
        God, to be transformed by His presence. This week is more than just a
        gathering; it's an encounter with Jesus.
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

const GuestSpeakers = () => {
  const speakerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    speakerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      speakerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="guestcontainer">
      <div className="regularfontguest">
      {["GUEST SPEAKER 1", "GUEST SPEAKER 2", "GUEST SPEAKER 3"].map(
        (speaker, index) => (
          <div
            key={index}
            className={index % 2 === 0 ? "speakerdivodd" : "speakerdiveven"}
          >
            <div className={index % 2 === 0 ? "trapezoid1" : "trapezoid2"}></div>
            <div
              className="speakername"
              ref={(el) => (speakerRefs.current[index] = el)}
            >
              {speaker}
            </div>
          </div>
        )
      )}
    </div>
    </div>
    
  );
};

const MerchSection = () => (
  <div className="merchsection subheaderfont">
    <h1>MERCH GOES HERE</h1>
  </div>
);

function HIAHomePage() {
  return (
    <div>
      <HeaderVideo />
      <div className="subheadercontainer">
        <RegisterSection />
        <FAQSection />
      </div>
      <div className="datediv regularfont">
        <p>DATES AND TIMES HERE</p>
      </div>
      <GuestSpeakers />
      <MerchSection />
    </div>
  );
}

export default HIAHomePage;
