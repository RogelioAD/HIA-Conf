import { React, useRef, useEffect, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(null);

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

  const speakerClassNames = [
    "speakerdiv1",
    "speakerdiv2",
    "speakerdiv3",
    "speakerdiv4",
    "speakerdiv5",
  ];

  const handleSpeakerClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="guestcontainer">
      <div className="regularfontguest">
        {[
          "JEANNE MAYO",
          "ABRAHAM ZUNIGA",
          "CHRIS SCOZ",
          "AUSTIN MARLER",
          "HARVEST WORSHIP",
        ].map((speaker, index) => (
          <div
            key={index}
            className={`speaker-container ${
              activeIndex === index ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => handleSpeakerClick(index)}
          >
            <div className={speakerClassNames[index]}>
              <div
                className="speakername"
                ref={(el) => (speakerRefs.current[index] = el)}
              >
                {speaker}
              </div>
            </div>
            <div
              className={`speakerdivcontent ${activeIndex === index ? "show" : ""}`}
            >
              Additional information about {speaker}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MerchSection = () => (
  <div className="merchsection subheaderfont">
    <div className="merchsectionleft">
      <h1>MERCH GOES HERE</h1>
    </div>
    <div className="merchsectionright">
      <h1>BUTTON HERE</h1>
    </div>
  </div>
);

//this block of code is for subheading container
const SubHeader = () => (
  <div className="subheadercontainer">
    <RegisterSection />
    <FAQSection />
  </div>
);

function listDiv() {
  const OurWhyMenu = () => (
    <Link className="nodecoration" to={"/ourwhy"}>
      <div className="listDiv">
        <div className="regularfont leftsidelistdiv" id="alignleft">
          <p>OUR WHY</p>
        </div>
        <div className="subthinfont rightsidelistdiv" id="alignright">
          <p>OBEDIENCE | ENCOUNTER | CHRIST</p>
        </div>
      </div>
    </Link>
  );

  const RegisterMenu = () => (
    <Link
      className="nodecoration"
      to={"https://harvestonline.churchcenter.com/registrations/events/2676756"}
    >
      <div className="listDiv">
        <div className="regularfont leftsidelistdiv" id="alignleft">
          <p>REGISTER</p>
        </div>
        <div className="subthinfont rightsidelistdiv" id="alignright">
          <p>DON'T WANNA MISS</p>
        </div>
      </div>
    </Link>
  );

  const MerchMenu = () => (
    <Link className="nodecoration" to={"/merch"}>
      <div className="listDiv">
        <div className="regularfont leftsidelistdiv" id="alignleft">
          <p>MERCH</p>
        </div>
        <div className="subthinfont rightsidelistdiv" id="alignright">
          <p>SHIRTS</p>
        </div>
      </div>
    </Link>
  );

  const FAQ = () => (
    <Link className="nodecoration" to={"/faq"}>
      <div className="listDiv">
        <div className="regularfont leftsidelistdiv" id="alignleft">
          <p>FAQ</p>
        </div>
        <div className="subthinfont rightsidelistdiv" id="alignright">
          <p>WHAT | WHY | WHERE</p>
        </div>
      </div>
    </Link>
  );

  // const GuestSpeakersMenu = () => (
  //   <Link className="nodecoration" to={"/speaker"}>
  //     <div className="listDivBottom">
  //       <div className="regularfont leftsidelistdiv" id="alignleft">
  //         <p>GUEST SPEAKERS</p>
  //       </div>
  //       <div className="subthinfont rightsidelistdiv" id="alignright">
  //         <p>LET'S SEE THEM</p>
  //       </div>
  //     </div>
  //   </Link>
  // );

  return (
    <div>
      <OurWhyMenu />
      <RegisterMenu />
      <MerchMenu />
      <FAQ />
    </div>
  );
}

function HIAHomePage() {
  return (
    <div>
      <HeaderVideo />
      <div className="datediv regularfont">
        <p>
          Harvest Church, Downtown Turlock Campus | 130 3rd St, Turlock, CA
          95380 | JUNE 15TH - 20TH
        </p>
      </div>
      <GuestSpeakers />
      {listDiv()}
      {/* <MerchSection /> */}
    </div>
  );
}

export default HIAHomePage;
